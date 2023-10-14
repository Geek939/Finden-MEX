gsap.registerPlugin(ScrollTrigger);


/*Deslizamiento suave*/ 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* ######  */


/* Efecto COVER  #####################*/

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var scrollPosition = window.pageYOffset;
      var shadeOpacity = scrollPosition / 500;
      var scaleAmount = 1 + scrollPosition * 0.0004;
      var marginTop = -scrollPosition * 0.2 + 1;
  
      // Actualizar la opacidad de la sombra
      document.querySelector(".shade").style.opacity = shadeOpacity;
  
      // Actualizar la escala de la imagen de fondo
      document.querySelector(".bg").style.transform = "scale(" + scaleAmount + ")";
  
      // Actualizar el margen superior del texto
      document.querySelector(".text").style.marginTop = marginTop + "px";
    });
  });
  

/* Efecto COVER  ##################  */


/* Entrada de texto  */
document.addEventListener("DOMContentLoaded", function() {
  const description = document.querySelector(".description");

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showElement() {
    if (isElementInViewport(description)) {
      description.style.opacity = "1";
      description.style.transform = "translateY(0)";
    }
  }

  function checkAndShowElement() {
    if (isElementInViewport(description)) {
      showElement();
      window.removeEventListener("scroll", checkAndShowElement);
    }
  }

  window.addEventListener("scroll", checkAndShowElement);
  
  // Asegúrate de llamar a checkAndShowElement una vez para que el efecto se aplique
  checkAndShowElement();
});



/*Revelado de imagenes */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".imgRevealed img");

  function checkImages() {
    images.forEach((image) => {
      const rect = image.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        image.classList.add("in-viewport");
      } else {
        image.classList.remove("in-viewport");
      }
    });
  }

  // Ejecutar la función al cargar la página y en cada desplazamiento
  window.addEventListener("scroll", checkImages);
  checkImages();
});
/*Revelado de imagenes  */ 

/*animacion background section*/
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('fade');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
});


/* Scroll Horizontal*/





/* bloque con scroll  */


document.addEventListener("DOMContentLoaded", function () {
  const revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    const image = container.querySelector("img");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: "power2.out",
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: "power2.out",
    });
  });
});


/*Footer */


// Detecta cuando se hace scroll
window.addEventListener("scroll", function() {
  var finloop = document.querySelector(".finloop");
  var dots2 = document.querySelector(".dots2");
  var rect = finloop.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Verifica si finloop está en la vista
  if (rect.top < windowHeight) {
    finloop.classList.add("active");
  }
});



/**/ 

// Desplazamiento horizontal 
if (window.innerWidth >= 768) {
  let scrollContainer = document.querySelector(".horizontal-scroll");

  gsap.to(scrollContainer, {
      x: "-100%",
      scrollTrigger: {
          trigger: ".horizontal-scroll",
          start: "top top",
          end: "+=200%",
          pin: true, 
          scrub: true, 
          invalidateOnRefresh: true 
      }
  });
}
