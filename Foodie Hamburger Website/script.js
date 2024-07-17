const menuIcon = document.querySelector('.header-content')
const classAdd = document.querySelector('.hamburger-menu-container')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('.right')

classAdd.addEventListener('click', (e) => {
    e.stopPropagation()
    menuIcon.classList.add('menu-icon')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener('click', (e) => {
    menuIcon.classList.remove('menu-icon')
})

window.addEventListener('click', (e) => {
    menuIcon.classList.remove('menu-icon')
})
