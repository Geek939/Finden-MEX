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


