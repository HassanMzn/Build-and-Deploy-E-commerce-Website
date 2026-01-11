const navMobile = document.getElementById('mobile')
const navbar = document.getElementById('navbar')
const hideNav = document.getElementById('close')


if (navMobile) {
   navMobile.addEventListener('click', () =>{
      navbar.classList.add('pop')
      navMobile.classList.toggle('hide')
      hideNav.style.display = 'flex'
      navMobile.style.display = 'none'
   })
}

if (hideNav) {
   hideNav.addEventListener('click', () =>{
      navbar.classList.remove('pop')
      hideNav.style.display = 'none'
      navMobile.style.display = 'flex'
   })
}

// One Product Page

const pickImg = document.querySelectorAll('img.small-img')
const mainImg = document.getElementById('mainImg')

localStorage.setItem('name', 'hmida')

console.log(localStorage.getItem('name'))

document.cookie = 'name=39a'

// pickImg[0].addEventListener('click', () =>{
//    mainImg.src = pickImg[0].src
// })
// pickImg[1].addEventListener('click', () =>{
//    mainImg.src = pickImg[1].src
// })
// pickImg[2].addEventListener('click', () =>{
//    mainImg.src = pickImg[2].src
// })
// pickImg[3].addEventListener('click', () =>{
//    mainImg.src = pickImg[3].src
// })

let test = pickImg[0]

pickImg.forEach(test => test.addEventListener('click', () =>{
   mainImg.src = test.src
}) )












