const navBurger = document.querySelector('.nav__burger')
const navBurgerLine = document.querySelector('.nav__line')
const navMenu = document.querySelector('.nav__menu')

navBurger.addEventListener('click', () => {
    navBurgerLine.classList.toggle('active')
    navMenu.classList.toggle('active')
})  