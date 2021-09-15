let meun = document.querySelector('#meunbar');
let nav = document.querySelector('.navbar');
let serch = document.querySelector('#searchicon');
let put = document.querySelector('form');

// navbar/
meun.onclick = () =>{
  meun.classList.toggle('fa-times');
  nav.classList.toggle('active');
  
  // remove box search//
  
  serch.classList.remove('fa-times');
  put.classList.remove('active');
  
}
// box search //
serch.onclick = () => {
  serch.classList.toggle('fa-times');
  put.classList.toggle('active');
  
  // remove navbar//
  
  meun.classList.remove('fa-times');
  nav.classList.remove('active');
}
// remove with scroll //

window.onscroll = () => {
  meun.classList.remove('fa-times');
  nav.classList.remove('active');
  serch.classList.remove('fa-times');
  put.classList.remove('active');

}

// change imm onclick//

document.querySelectorAll('.smollImg').forEach(images => {
  images.onclick = () =>{
    document.querySelector('.activeImg').src =images.getAttribute('src');
  }
})

// change imm onclick//

document.querySelectorAll('.smollImg-1').forEach(images => {
  images.onclick = () =>{
    document.querySelector('.activeImg-1').src =images.getAttribute('src');
  }
})

// change imm onclick//

document.querySelectorAll('.smollImg-2').forEach(images => {
  images.onclick = () => {
    document.querySelector('.activeImg-2').src = images.getAttribute('src');
  }
})

// change imm onclick//

document.querySelectorAll('.smollImg-3').forEach(images => {
  images.onclick = () => {
    document.querySelector('.activeImg-3').src = images.getAttribute('src');
  }
})








// slider///
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});
