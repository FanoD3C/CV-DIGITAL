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

// =========== SHOW MORE BTN ============= 
// const readMoreBtn = document.querySelector(".read-more-btn");
// const textContainer = document.querySelector(".text-container-desc");

// readMoreBtn.addEventListener("click", (e) => {
//   textContainer.classList.toggle("show-more");
//   if (readMoreBtn.innerText === "Saber mas...") {
//     readMoreBtn.innerText = "Saber Menos";
//   } else {
//     readMoreBtn.innerText = "Saber mas...";
//   }
// });

// Tengo que optimizar este codigo
// BTN LEER MAS (1) 

function btnMoreFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("read-more-btn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Saber mas / 2014";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Mucho texto / 2014";
    moreText1.style.display = "inline";
  }
}

// BTN LEER MAS (2) 

function btnMoreFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("read-more-btn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Saber mas / 2015";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Mucho texto / 2015";
    moreText2.style.display = "inline";
  }
}

// BTN LEER MAS (3) 

function btnMoreFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("read-more-btn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Saber mas / 2016";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Mucho texto / 2016";
    moreText3.style.display = "inline";
  }
}

// BTN LEER MAS (4) 

function btnMoreFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("read-more-btn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Saber mas / 2017";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Mucho texto / 2017";
    moreText4.style.display = "inline";
  }
}

// BTN LEER MAS (5) 

function btnMoreFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("read-more-btn5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "Saber mas / 2018";
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "Mucho texto / 2018";
    moreText5.style.display = "inline";
  }
}

// BTN LEER MAS (6) 

function btnMoreFunction6() {
  var dots6 = document.getElementById("dots6");
  var moreText6 = document.getElementById("more6");
  var btnText6 = document.getElementById("read-more-btn6");

  if (dots6.style.display === "none") {
    dots6.style.display = "inline";
    btnText6.innerHTML = "Saber mas / 2019";
    moreText6.style.display = "none";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = "Mucho texto / 2019";
    moreText6.style.display = "inline";
  }
}
// BTN LEER MAS (7) 

function btnMoreFunction7() {
  var dots7 = document.getElementById("dots7");
  var moreText7 = document.getElementById("more7");
  var btnText7 = document.getElementById("read-more-btn7");

  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "Saber mas / 2020";
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "Mucho texto / 2020";
    moreText7.style.display = "inline";
  }
}
// BTN LEER MAS (8) 

function btnMoreFunction8() {
  var dots8 = document.getElementById("dots8");
  var moreText8 = document.getElementById("more8");
  var btnText8 = document.getElementById("read-more-btn8");

  if (dots8.style.display === "none") {
    dots8.style.display = "inline";
    btnText8.innerHTML = "Saber mas / 2021";
    moreText8.style.display = "none";
  } else {
    dots8.style.display = "none";
    btnText8.innerHTML = "Mucho texto / 2021";
    moreText8.style.display = "inline";
  }
}




// SLIDER TECHONOLIG




// CARGA PEREZOSA DE IMAGENES
// inView( 'figure' ).on( 'enter', function( figure ) {
 
//   var img = figure.querySelector( 'img' ); // 1

//   if (  'undefined' !== typeof img.dataset.src ) { // 2

//       figure.classList.add( 'is-loading' ); // 3

//       // 4
//       newImg = new Image();
//       newImg.src = img.dataset.src;

//       newImg.addEventListener( 'load', function() {

//          figure.innerHTML = ''; // 5
//          figure.appendChild( this );

//          // 6
//          setTimeout( function() {
//             figure.classList.remove( 'is-loading' );
//             figure.classList.add( 'is-loaded' );
//          }, 300 );
//       } );
//   }
// } );

