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

// ============ BTN INFO MORE
function myFunctionInfo() {
  alert("ESTE SITIO PRESENTA ERRORES QUE SE DEBEN MEJORAR PARA DISPOSITIVOS IOS, ESTOS SON:\n" +  
  "-BacktoBTN: Nepresenta errores visuales de adaptacion\n" + 
  "-WspButtton: No es visible en IOS\n" + 
  "-Hover de PDF: Se ubica de manera indebida en IOS\n" + 
  "-Modelos 3D-AR: Se deben actuaizar para que aparezcan los correctos en formato USDZ \n" + 
  "-PDF: Es visible solo en formato desktop/pc debo actualizarlo para que este sea visible desde la web\n" + 
  "\n" + 
  "Te pido disculpas por los errores que presentan en la actualidad el sitio, te reocimiendo como navegador para que utilices este sitio es Google Chrome, estoy trbajando con los elementos -webkit -mozkit etc. para adaptar todo lo antes posible y este sea igual en todos los dispositivos\n" + 
  "\n" + 
  "Recuerda puedes encontrar esta BETA de sitio en Github para que practiques y veas el codigo que le he ingresado a este sitio");
}


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
// SLIDER 
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn-slide');
let currentSlide = 1;

// manual navigation slider
var manualNav = function (manual){
  slides.forEach((slideRemove) => {
    slideRemove.classList.remove('activeSlide');
    
    btns.forEach((btnRemove) => {
      btnRemove.classList.remove('activeSlide');
    });
  });
  // a la var slides incializada anteriormente, le vamos asignar como objeto el parametro manual
  slides[manual].classList.add('activeSlide');
  btns[manual].classList.add('activeSlide');
}

btns.forEach((btnEvent, i) => {
  btnEvent.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

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

// CAROUSEL SLIDER CON LIBRERIA GLICKJS
// window.addEventListener('load', function(){
// 	new Glider(document.querySelector('.carousel__lista'), {
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		dots: '.carousel__indicadores',
// 		arrows: {
// 			prev: '.carousel__anterior',
// 			next: '.carousel__siguiente'
// 		},
// 		responsive: [
// 			{
// 			  // screens greater than >= 775px
// 			  breakpoint: 450,
// 			  settings: {
// 				// Set to `auto` and provide item width to adjust to viewport
// 				slidesToShow: 2,
// 				slidesToScroll: 2
// 			  }
// 			},{
// 			  // screens greater than >= 1024px
// 			  breakpoint: 800,
// 			  settings: {
// 				slidesToShow: 4,
// 				slidesToScroll: 4
// 			  }
// 			}
// 		]
// 	});
// });

