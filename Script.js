
document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. NAVBAR — cambia sfondo allo scroll
     ---------------------------------------------------------- */
  const nav = document.getElementById('nav-container');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.style.backgroundColor = 'rgba(0,0,0,0.85)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.transition = "0.15s linear all"
      } else {
        nav.style.backgroundColor = 'rgba(0,0,0,0)';
        nav.style.backdropFilter = 'blur(5px)';
      }
    });
  }

  /* ----------------------------------------------------------
     2. REVEAL ON SCROLL — fade-in + slide-up per ogni .reveal
        e per tutti gli elementi delle sezioni principali
     ---------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.reveal, .content-presentazione h2, .content-presentazione li, ' +
    '.Card-Ingredienti, .column-card, .storia-container, ' +
    '.menu-category, .menu-header, #Titolo-Sezioni, #Titolo-Ingredienti'
  );

  // Stato iniziale: nascosto
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Delay progressivo per elementi fratelli (card, li, ecc.)
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(c =>
            revealTargets instanceof NodeList
              ? [...revealTargets].includes(c)
              : false
          );
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.max(0, idx) * 0.1}s`;
        }
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     3. COUNTER ANIMATO — per le statistiche (.st-val)
     ---------------------------------------------------------- */
  const counters = document.querySelectorAll('.st-val[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800; // ms
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const ease = 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.round(target * ease) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ----------------------------------------------------------
     4. PARALLAX HEADER — effetto parallasse sull'immagine
     ---------------------------------------------------------- */
  const headerImg = document.querySelector('.header-img');
  if (headerImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        headerImg.style.backgroundPositionY = `${y * 0.4}px`;
      }
    });
  }

  /* ----------------------------------------------------------
     5. FADE-OUT HEADER MSG al scroll
     ---------------------------------------------------------- */
  const msgScroll = document.querySelector('.msg-scorrimento');
  if (msgScroll) {
    window.addEventListener('scroll', () => {
      const ratio = 1 - Math.min(window.scrollY / 300, 1);
      msgScroll.style.opacity = ratio;
      msgScroll.style.transform = `translateY(${-window.scrollY * 0.3}px)`;
    });
  }

  /* ----------------------------------------------------------
     7. MENU ITEM — highlight al hover con slide
     ---------------------------------------------------------- */
  document.querySelectorAll('.menu-item').forEach(item => {
    item.style.transition = 'transform 0.25s ease, background-color 0.25s ease';
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateX(6px)';
    });
    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateX(0)';
    });
  });

  /* ----------------------------------------------------------
     8. SMOOTH SCROLL — per link interni
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------
     9. STORIA ORNAMENT — animazione numero decorativo
     ---------------------------------------------------------- */
  const ornament = document.querySelector('.storia-ornament');
  if (ornament) {
    ornament.style.opacity = '0';
    ornament.style.transform = 'scale(0.7)';
    ornament.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

    const ornObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ornament.style.opacity = '1';
          ornament.style.transform = 'scale(1)';
          ornObs.unobserve(ornament);
        }
      });
    }, { threshold: 0.3 });
    ornObs.observe(ornament);
  }

});

// 1. Aggiungi document. e le virgolette per l'ID
const contenitore = document.getElementById("rullino-Sfida");

const gallery = [
  { src: "Images/images1.jpeg", alt: "Primo piano" },
  { src: "Images/images2.jpeg", alt: "Spiaggia di giorno" },
  { src: "Images/images3.jpeg", alt: "Tramonto al mare" },
  { src: "Images/images4.jpg", alt: "Primo piano" },
  { src: "Images/images1.jpeg", alt: "Primo piano" },
  { src: "Images/images2.jpeg", alt: "Spiaggia di giorno" },
  { src: "Images/images3.jpeg", alt: "Tramonto al mare" },
  { src: "Images/images4.jpg", alt: "Primo piano" },
  { src: "Images/images1.jpeg", alt: "Primo piano" },
  { src: "Images/images2.jpeg", alt: "Spiaggia di giorno" },
  { src: "Images/images3.jpeg", alt: "Tramonto al mare" },
  { src: "Images/images4.jpg", alt: "Primo piano" }
];

gallery.forEach(foto => {
  let img = document.createElement("img");
  img.src = foto.src;
  img.alt = foto.alt;
  
  // 2. Devi appendere l'immagine (img), non il contenitore a se stesso!
  contenitore.appendChild(img); 
});

let indiceCorrente = 0; // Iniziamo dalla prima foto (posizione 0 nell'array)

function mostraProssimaFoto() {
  // 1. Aumentiamo l'indice di 1
  indiceCorrente++;

  // 2. Controllo: se arriviamo alla fine dell'array, ricominciamo da 0
  if (indiceCorrente >= gallery.length) {
    indiceCorrente = 0;
  }

  // 3. Spostiamo lo scroll del contenitore
  const larghezzaFoto = contenitore.querySelector("img").clientWidth;
  contenitore.scrollTo({
    left: indiceCorrente * larghezzaFoto,
    behavior: 'smooth' // Questo rende lo scorrimento fluido e non a scatti
  });
}

// Esegue "mostraProssimaFoto" ogni 3000 millisecondi (ovvero 3 secondi)

let autoScroll = setInterval(mostraProssimaFoto, 3000);


// ===================== GALLERIA EVENTI & LIGHTBOX =====================

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');
    
    let currentIndex = 0;
    const totalImages = galleryItems.length;
    
    // Imposta il totale
    if (lightboxTotal) {
        lightboxTotal.textContent = totalImages;
    }
    
    // Funzione per aprire il lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Funzione per chiudere il lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Funzione per aggiornare il lightbox
    function updateLightbox() {
        const item = galleryItems[currentIndex];
        const img = item.querySelector('img');
        const tag = item.querySelector('.gallery-tag').textContent;
        const title = item.querySelector('.gallery-title').textContent;
        const date = item.querySelector('.gallery-date').textContent;
        
        // Rimuovi l'animazione precedente
        lightboxImg.style.opacity = '0';
        
        // Carica la nuova immagine
        const newImg = new Image();
        newImg.onload = function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = img.alt;
            
            // Fade in con ritardo
            setTimeout(() => {
                lightboxImg.style.opacity = '1';
            }, 50);
        };
        newImg.src = img.src;
        
        // Aggiorna info
        document.querySelector('.lightbox-tag').textContent = tag;
        document.querySelector('.lightbox-title').textContent = title;
        document.querySelector('.lightbox-date').textContent = date;
        lightboxCurrent.textContent = currentIndex + 1;
    }
    
    // Click sulle immagini della galleria
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Pulsante chiudi
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Click fuori dall'immagine
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Pulsante precedente
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateLightbox();
        });
    }
    
    // Pulsante successivo
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % totalImages;
            updateLightbox();
        });
    }
    
    // Navigazione con tastiera
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateLightbox();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % totalImages;
            updateLightbox();
        }
    });
});

const circle = document.querySelector('.cursor-circle');

// Posizioni iniziali
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

// Velocità di inseguimento (più è basso, più ritardo c'è)
const delay = 0.15; 

// Rileva movimento mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Funzione di animazione
function animateCircle() {
    // Calcola la distanza tra cerchio e mouse
    let dx = mouseX - circleX;
    let dy = mouseY - circleY;

    // Muovi il cerchio di una percentuale della distanza
    circleX += dx * delay;
    circleY += dy * delay;

    // Applica la nuova posizione
    circle.style.left = circleX + 'px';
    circle.style.top = circleY + 'px';

    // Richiama l'animazione al frame successivo
    requestAnimationFrame(animateCircle);
}
// Avvia l'animazione
animateCircle();

// ===================== PRELOADER =====================

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const preloaderBar = document.querySelector('.preloader-bar');
    const preloaderText = document.querySelector('.preloader-text');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        preloaderBar.style.width = progress + '%';
        preloaderText.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                // Abilita lo scroll dopo il fade-out
                setTimeout(() => {
                    document.body.style.overflow = 'visible';
                }, 600);
            }, 300);
        }
    }, 80);
});

// Blocca lo scroll iniziale
document.body.style.overflow = 'hidden';

// ===================== OTTIMIZZAZIONI MOBILE =====================

// Rileva se è mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Disabilita parallax su mobile
    const headerImg = document.querySelector('.header-img');
    if (headerImg) {
        headerImg.style.backgroundAttachment = 'scroll';
    }
    
    // Ottimizza animazioni
    document.querySelectorAll('.reveal, .Card-Ingredienti, .column-card').forEach(el => {
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    });
}

// Resto del tuo codice JavaScript...