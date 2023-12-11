const hamburger = document.querySelector('.menuopen')
const close = document.querySelector('.menuclose')
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
