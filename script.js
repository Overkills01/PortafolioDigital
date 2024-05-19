//fondo//
particlesJS("particles-js", {

    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    
    
  });
  
  function adjustParticles() {
    if (window.innerWidth <= 768) {
        // Menos paticulas en mobile
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 30, 
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
            }
        });
    }
}






  
const menuItems = document.querySelectorAll('.menu__lista__item a');


menuItems.forEach(item => {
    
    item.addEventListener('click', function() {
       
        menuItems.forEach(link => {
            link.classList.remove('active');
        });
       
        this.classList.add('active');
    });
});

//Script para el desplazamiento suave hacia arriba
const iconoFlecha = document.getElementById('icono-flecha');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 100 && scrollTop > lastScrollTop) {
        //  si el usuario ha hecho scroll hacia abajo y la posición actual es mayor a 100 píxeles
        iconoFlecha.classList.add('mostrar');
    } else {
        // si el usuario ha hecho scroll hacia arriba
        iconoFlecha.classList.remove('mostrar');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});

iconoFlecha.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



  

/*Saludo inicial */


        document.addEventListener('DOMContentLoaded', function() {
            const backdrop = document.getElementById('backdrop');
            backdrop.style.display = 'flex'; 
        
            const saludo = document.getElementById('saludo');
        
            
            function obtenerSaludo() {
                const horaActual = new Date().getHours();
                let nuevoSaludo;
        
                if (horaActual >= 5 && horaActual < 12) {
                    nuevoSaludo = 'Buenos días';
                } else if (horaActual >= 12 && horaActual < 19) {
                    nuevoSaludo = 'Buenas tardes';
                } else if (horaActual >= 19 && horaActual < 24) {
                    nuevoSaludo = 'Buenas noches';
                } else {
                    nuevoSaludo = 'Buenas madrugada?';
                }
        
                saludo.textContent = `${nuevoSaludo}`;
            }
        
            
            obtenerSaludo();
        
           
            
        });
        
        let backdropVisible = false;
let blurEffectActive = false;

function toggleBackdrop() {
  const backdrop = document.getElementById('backdrop');
  if (!backdropVisible) {
    backdrop.style.display = 'flex';
    backdrop.style.opacity = '1'; 
    setTimeout(() => {
      backdrop.style.opacity = '0'; 
      setTimeout(() => {
        backdrop.style.display = 'none'; 
      }, 1000); 
    }, 100); 
    backdropVisible = true;

    
    document.removeEventListener('click', clickListener);
  }
}

function cambiarZIndex() {
  const particlesJs = document.getElementById('particles-js');
  particlesJs.style.zIndex = '-5';
}

function toggleBlurEffect() {
  const particlesJs = document.getElementById('particles-js');
  if (!blurEffectActive) {
    particlesJs.style.filter = 'none';
    blurEffectActive = true;
  } else {
    particlesJs.style.filter = 'blur(5px)';
    blurEffectActive = false;
  }
}


let originalOverflow;


function clickListener() {
  toggleBackdrop();
  cambiarZIndex();
  toggleBlurEffect();

  
  originalOverflow = document.body.style.overflow;

  
  document.body.style.overflow = "auto";

 
  document.removeEventListener('click', clickListener);
}


document.addEventListener('click', clickListener);


toggleBlurEffect();







/*Input mensajae conctacto*/


const mensajeTextArea = document.getElementById('mensaje');
const contadorPalabras = document.getElementById('contadorPalabras');
const mensajeInformativo = document.getElementById('mensajeInformativo');

mensajeTextArea.addEventListener('input', function() {
    const texto = mensajeTextArea.value.trim();
    const palabras = texto.match(/\b[-'a-zA-Z0-9]+\b/g);
    contadorPalabras.textContent = (palabras ? palabras.length : 0) + ' palabra(s)';

    if (palabras && palabras.length <= 100) {
        mensajeInformativo.textContent = '';
        mensajeInformativo.classList.remove('mostrar');
    }
    
    if (texto.length > 0) {
        contadorPalabras.classList.add('mostrar');
    } else {
        contadorPalabras.classList.remove('mostrar');
    }
});

document.querySelector('.formulario-contacto').addEventListener('submit', function(event)  { 
    const texto = mensajeTextArea.value.trim();
    const palabras = texto.match(/\b[-'a-zA-Z0-9]+\b/g);
    if (palabras && palabras.length > 100) {
        event.preventDefault();
        mensajeInformativo.textContent = 'El mensaje no puede tener más de 100 palabras.';
        mensajeInformativo.classList.add('mostrar');
    } else {
        mensajeInformativo.classList.remove('mostrar');
    }
});





/*PArte de sidebar*/
let sidebarOpen = false;

document.body.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const iconoFlecha1 = document.getElementById('icono-flecha1');

    if (sidebarOpen && (event.target === iconoFlecha1 || iconoFlecha1.contains(event.target))) {
        toggleSidebar();
    }
});

window.addEventListener('scroll', function(event) {
    const sidebar = document.getElementById('sidebar');
    if (sidebarOpen && event.target !== sidebar) {
        toggleSidebar();
    }
});

function toggleSidebar() {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active'); 
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active'); 
    sidebarOpen = !sidebarOpen;
    sidebar.style.right = sidebarOpen ? '0' : '-400px';

    document.body.classList.toggle('sidebar-open');
    const iconoFlecha1 = document.getElementById('icono-flecha1');
    iconoFlecha1.classList.toggle('visible', sidebarOpen); 
    iconoFlecha1.classList.toggle('rotating', sidebarOpen); 
}







document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('miVideo');
  video.removeAttribute('controls');
});



document.getElementById('glitch-button').addEventListener('click', function(event) {
  event.preventDefault(); 
  document.body.classList.add('glitch-effect');
  document.getElementById('glitch-container').classList.add('glitch-effect');

  // Cambiar la imagen y el video al momento del glitch
  document.querySelector('.formulario-contacto__img').src = 'assets/Imagen/Devil/deidad-terrror.gif'; 
  document.querySelector('.titulo__perfil').src = 'assets/Imagen/Perfil/perfil2.png'; 
  document.getElementById('miVideo').src = 'assets/Video/troubleEncriptador2.mp4'; 

  // Agregar el gif a todas las imágenes de habilidades
  const imagenesHabilidades = document.querySelectorAll('.galeria__imagenes .imagen img');
  imagenesHabilidades.forEach(function(img) {
    img.src = 'assets/Imagen/Devil/Sin-título-9.gif';
  });

  // Agregar el gif a todas las imágenes de pasatiempos
  const imagenesPasatiempos = document.querySelectorAll('.galeriaPasatimepos__imagenes .imagen2 img');
  imagenesPasatiempos.forEach(function(img) {
    img.src = 'assets/Imagen/Devil/Sin-título-9.gif';
  });

  // Agregar el gif a todas las imágenes de formación académica
  const imagenesFormacion = document.querySelectorAll('.galeriaAcademico__imagenes .imagen3 img');
  imagenesFormacion.forEach(function(img) {
    img.src = 'assets/Imagen/Devil/Sin-título-1.gif';
  });

  // Agregar el gif a todas las imágenes de Experiencia
  const imagenesExperiencia = document.querySelectorAll('.experiencia__img');
  imagenesExperiencia.forEach(function(img) {
    img.setAttribute('data-src', img.src); 
    img.src = 'assets/decod_print01.gif';
  });

  // Después de 10 segundos, volver a la imagen y video originales
  setTimeout(function() {
    document.querySelector('.formulario-contacto__img').src = 'assets/contact_image.png'; 
    document.querySelector('.titulo__perfil').src = 'assets/Imagen/Perfil/perfil.png'; 
    document.getElementById('miVideo').src = 'assets/Video/promoEncriptador.mp4'; 
    document.body.classList.remove('glitch-effect');
    document.getElementById('glitch-container').classList.remove('glitch-effect');

    // Volver a las imágenes originales de habilidades
    imagenesHabilidades.forEach(function(img) {
      const dataText = img.parentNode.getAttribute('data-text');
      img.src = `assets/Imagen/Icon/${dataText}.svg`;
    });

    // Volver a las imágenes originales de pasatiempos
    imagenesPasatiempos.forEach(function(img) {
      const dataText = img.parentNode.getAttribute('data-text');
      if (dataText === 'Tocar Guitarra') {
        img.src = 'assets/Imagen/Pasatiempos/male-play-guitar-in-liminal-space-1.jpg';
      } else if (dataText === 'Tocar Piano') {
        img.src = 'assets/Imagen/Pasatiempos/piano.jpg';
      } else if (dataText === 'Ver Series') {
        img.src = 'assets/Imagen/Pasatiempos/anime-girl-painting.png';
      } else if (dataText === 'Videojuegos') {
        img.src = 'assets/Imagen/Pasatiempos/controller-with-a-modern-gamer.jpeg';
      } else if (dataText === 'Dibujo Digital') {
        img.src = 'assets/Imagen/Pasatiempos/digital drawing.jpg';
      } else if (dataText === 'Tomar Fotos') {
        img.src = 'assets/Imagen/Pasatiempos/photo city.jpg';
      } else if (dataText === 'Stop Motion') {
        img.src = 'assets/Imagen/Pasatiempos/poor-stop-motion.gif';
      } else if (dataText === 'Escribir Historias') {
        img.src = 'assets/Imagen/Pasatiempos/imagine-a-book-cover-1.jpg';
      }
    });

    // Volver a las imágenes originales de formación académica
    imagenesFormacion.forEach(function(img) {
      img.src = 'assets/Imagen/Formacion/one-800x450.png'; 
    });

    // Volver a las imágenes originales de Experiencia
    imagenesExperiencia.forEach(function(img) {
      img.src = img.getAttribute('data-src'); 
    });
  }, 10000); 
});
