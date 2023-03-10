let menuIcon = document.querySelector('.top-bar__icon')
let navBar = document.querySelector('.header nav')
let removeIcon = document.querySelector('.top-bar__remove')
let iconBar = document.querySelector('.top-bar__icon')
let tabMenu = document.querySelector('.top-nav')
console.log([navBar])
menuIcon.addEventListener('click', function(e){
    navBar.style.overflow = 'visible'
    removeIcon.style.zIndex = 30
    menuIcon.style.zIndex = -10
})
removeIcon.addEventListener('click', function(e){
    navBar.style.overflow= 'hidden'
    removeIcon.style.zIndex = -1
    menuIcon.style.zIndex = 3
})
