let carousel = document.querySelector('.slider__carousel');
let arrowIcons = document.querySelectorAll('.slider__slick span')
let firstImg = carousel.querySelectorAll('img')[0]

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.width + 20;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    let round = Math.floor(carousel.scrollLeft)
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = round == scrollWidth ? "none" : "block";
}

const autoSlice = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth;
    var valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft ) {
        return carousel.scrollLeft +=( positionDiff > (firstImgWidth / 3)) ? valDifference : -positionDiff;
    }
    carousel.scrollLeft += (positionDiff > (firstImgWidth / 3)) ? valDifference : -positionDiff;
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id === "prev" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const dragStart = (e) => {
    isDragStart = true;

    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart= false;
    carousel.classList.remove('dragging');
    autoSlice();
}
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop)

carousel.addEventListener('touchmove', dragging);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('touchend', dragStop)