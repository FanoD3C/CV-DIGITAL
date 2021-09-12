/ MENU HAMBURGUER /

/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));




// CARGA PEREZOSA DE IMAGENES
inView( 'figure' ).on( 'enter', function( figure ) {
 
  var img = figure.querySelector( 'img' ); // 1

  if (  'undefined' !== typeof img.dataset.src ) { // 2

      figure.classList.add( 'is-loading' ); // 3

      // 4
      newImg = new Image();
      newImg.src = img.dataset.src;

      newImg.addEventListener( 'load', function() {

         figure.innerHTML = ''; // 5
         figure.appendChild( this );

         // 6
         setTimeout( function() {
            figure.classList.remove( 'is-loading' );
            figure.classList.add( 'is-loaded' );
         }, 300 );
      } );
  }
} );