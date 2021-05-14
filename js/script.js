const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav')
const navLeft = menu.getBoundingClientRect().left;

/* Abrindo o menu */
navOpen.addEventListener('click', ()=>{
    console.log('aberto')
    menu.classList.add('show');
    document.body.classList.add('show');
    navBar.classList.add('show');
})

/* fechando o menu */

navClose.addEventListener('click', ()=>{
    console.log('fechado');
    menu.classList.remove('show');
    document.body.classList.remove('show');
    navBar.classList.remove('show')
})
