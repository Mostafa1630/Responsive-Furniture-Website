const menuIcon  = document.querySelector('.menu-icon');
navbar  = document.querySelector('.navbar'),
cartIcon = document.getElementById('cart-icon'),
userIcon = document.getElementById('user-icon'),
cartSection = document.querySelector('.cart'),
loginForm = document.querySelector('.login-form');

// Menu Icon
menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('move');
  cartSection.classList.remove('active');
  loginForm.classList.remove('active');
}

// Cart Icon
cartIcon.onclick = () => {
  cartSection.classList.toggle('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
  menuIcon.classList.remove('move');
}

// Login From
userIcon.onclick = () => {
  loginForm.classList.toggle('active');
  cartSection.classList.remove('active');
  navbar.classList.remove('active');
  menuIcon.classList.remove('move');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('move');
}

// WHEN SCROLL TO CHANGE BACKGROUND
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
  header.classList.toggle('shadow' , window.scrollY > 0);
});

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll' , () => {
  scrollTop.classList.toggle('active' , window.scrollY > 0);
});


