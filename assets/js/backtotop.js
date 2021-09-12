const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


/*===  SCROLL UP SECTION/DIV ACTIVE LINK  ===*/
// // creamos una var const para poder manipularla + la consulta selecionada
// const sectionsActive = document.querySelectorAll('section[id]')
// // llamamos a la funcion scrollActive
// function scrollActive() {
//   // var const para eje Y (plano 2D)
//   const scrollY = windows.pageYOffset
//     sectionsActive.forEach(current =>{
//       const sectionHeight = current.offsetHeight 
//       const sectionTop = current.offsetTop - 50;
//       // Indicamos con una nueva VAR el atributo que tomaremos, en este caso ID
//       sectionId = current.getAttribute('id')
//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         // usamos la clase active link para dar una accion
//         document.querySelector ('.nav__menu a[href*=]' + sectionId + '}').classList.add('active-link')
//       }else{
//         document.querySelectorAll('.nav__menu a[href*=]' + sectionId + ']').classList.remove('active-link')
//       }
//     })
// }

// /*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   // reset: true
// })

// sr.reveal(`.content-1, .content-1-fond`,{delay: 600})
// // sr.reveal(`.home__footer`,{delay: 700})
// sr.reveal(`.content-1-logo`,{delay: 900, origin: 'top'})

// sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
// sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
// sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
// sr.reveal(`.case__img`,{origin: 'top'})
// sr.reveal(`.case__data`)