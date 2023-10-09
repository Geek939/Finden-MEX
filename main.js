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

// Elementos HTML
const horizontalScroll = document.querySelector('.horizontal-scroll');
const sections = document.querySelectorAll('.scrollable-section');

let isDragging = false;
let initialX;
let offsetX = 0;
let scrollLeftBeforeDrag;

horizontalScroll.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialX = e.clientX + horizontalScroll.scrollLeft;
  offsetX = e.clientX;
  scrollLeftBeforeDrag = horizontalScroll.scrollLeft;
  horizontalScroll.style.cursor = 'grabbing'; // Cambia el cursor durante el arrastre
  e.preventDefault(); // Previene el comportamiento predeterminado del navegador
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - offsetX;
  offsetX = e.clientX;
  horizontalScroll.scrollLeft = initialX - deltaX;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  horizontalScroll.style.cursor = 'grab';

  // Determina si el desplazamiento se realizó en más de la mitad de la sección
  const halfway = horizontalScroll.scrollLeft > scrollLeftBeforeDrag + horizontalScroll.offsetWidth / 2;
  if (!halfway) {
    // Desplázate suavemente de regreso a la sección anterior
    horizontalScroll.scrollTo({
      left: scrollLeftBeforeDrag,
      behavior: 'smooth',
    });
  } else if (scrollLeftBeforeDrag !== horizontalScroll.scrollLeft) {
    // El scroll se desplazó pero no regresó, entonces retrocede suavemente
    horizontalScroll.scrollTo({
      left: scrollLeftBeforeDrag,
      behavior: 'smooth',
    });
  }
});



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

gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('.scroller');



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
    function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var EdgeEasingPlugin = /** @class */function (_super) {
  __extends(EdgeEasingPlugin, _super);
  function EdgeEasingPlugin() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._remainMomentum = {
      x: 0,
      y: 0 };

    return _this;
  }
  EdgeEasingPlugin.prototype.transformDelta = function (delta) {
    var _a = this.scrollbar,limit = _a.limit,offset = _a.offset;
    var x = this._remainMomentum.x + delta.x;
    var y = this._remainMomentum.y + delta.y;
    // clamps momentum within [-offset, limit - offset]
    this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
    return { x: 0, y: 0 };
  };
  EdgeEasingPlugin.prototype.onRender = function (remainMomentum) {
    Object.assign(this._remainMomentum, remainMomentum);
  };
  EdgeEasingPlugin.pluginName = 'edgeEasing';
  return EdgeEasingPlugin;
}(Scrollbar.ScrollbarPlugin);
Scrollbar.use(EdgeEasingPlugin);



const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });

ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });





gsap.set('section.footer-container', { yPercent: -50 })

const uncover = gsap.timeline({ paused:true })

uncover
.to('section.footer-container', { yPercent: 0, ease: 'none' })
;

ScrollTrigger.create({  
  trigger: 'section.conclusion',
  start: 'bottom bottom',
  end: '+=75%',
  animation: uncover,
  scrub: true,  
  markers: true,
})





// Only necessary to correct marker position - not needed in production
if (document.querySelector('.gsap-marker-scroller-start')) {		
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

  bodyScrollBar.addListener(({ offset }) => {  
    gsap.set(markers, { marginTop: -offset.y })
  });
}

