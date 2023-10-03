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
      window.removeEventListener("scroll", checkAndShowElement);
    }
  }

  function checkAndShowElement() {
    if (isElementInViewport(description)) {
      showElement();
    }
  }

  window.addEventListener("scroll", checkAndShowElement);
});

/*2do texto*/

/*2do texto */
/* Entrada de texto */

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