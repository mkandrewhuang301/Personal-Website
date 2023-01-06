const menu = document.querySelector('#mobile-menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    navbar.classList.toggle('active')
});