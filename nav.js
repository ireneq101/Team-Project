const hamburger = document.querySelector('.menu-icon')
const close = document.querySelector('.menu-icon-close')
const nav2 = document.querySelector('.nav2')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('hide')
    close.classList.add('hide')
    nav2.classList.toggle('visible')
})

close.addEventListener('click', ()=>{
    hamburger.classList.remove('hide')
    close.classList.remove('hide')
    nav2.classList.toggle('visible')
})