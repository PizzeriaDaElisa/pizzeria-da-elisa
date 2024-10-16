function sendWhatsApp(event) {
  event.preventDefault(); // Impedisce il caricamento della pagina

  // Recupera i dati dal modulo
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const number = document.getElementById("number").value;
  const country = document.getElementById("country").value;
  const phone = document.getElementById("phone").value;
  const order = document.getElementById("order").value;
  const time = document.getElementById("time").value; // Orario selezionato
  const message = document.getElementById("message").value;

  // Crea il messaggio WhatsApp
  const phoneNumber = "3279968390"; // Numero di telefono in formato internazionale (senza +)
  const whatsappMessage = `Ciao, mi chiamo ${name}. Vivo in ${address} ${number}, ${country}. Il mio numero di telefono è ${phone}. Ho ordinato: ${order}. Vorrei che l'ordinazione fosse pronta per le ore: ${time}. ${message}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Apri WhatsApp
  window.open(whatsappLink, "_blank");

  // Resetta il modulo dopo l'invio
  document.getElementById("contact-form").reset();
}


const carouselImages = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach((image, i) => {
    image.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
}

showImage(currentIndex);

setInterval(nextImage, 2000);



document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});


window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  
  menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });

  
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && event.target !== menuToggle) {
      mobileMenu.style.display = "none";
    }
  });
});


const title = document.querySelector('.extra-content h1');
function updateBorderWidth() {
  const rect = title.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const visibility = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
  title.style.setProperty('--border-width', `${visibility * 100}%`);
}
window.addEventListener('scroll', updateBorderWidth);
updateBorderWidth();

document.addEventListener("DOMContentLoaded", function () {
  
  const homeSection = document.querySelector('.home-section');
  
  setTimeout(() => {
    homeSection.classList.add('animate');
  }, 200); 
});


document.addEventListener("DOMContentLoaded", () => {
  
  const elements = document.querySelectorAll(".home-section li");

  
  const options = {
    threshold: 0.3
  };

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        entry.target.classList.add('visible');
        
        observer.unobserve(entry.target);
      }
    });
  }, options);

  
  elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", () => {
  
  const items = document.querySelectorAll(".pizza-svg12, .description-container12");

  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.3, 
    }
  );

  
  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  
  const items = document.querySelectorAll(".pizza-svg, .description-container");

  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.3, 
    }
  );

  
  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  
  const items = document.querySelectorAll(".menu-item");

  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.4, 
    }
  );

  
  items.forEach((item) => observer.observe(item));
});


const images = [
  'food1.jpg',
  'food2.jpg',
  'food3.jpg',
  'food4ù.jpg',
  'food5.jpg',
  'food6.jpg',
  'food7.jpg',
  'food8.jpg',
  'food9.jpg',
  'food10.jpg'
]; 

const galleryWrapper = document.querySelector('.gallery-wrapper');
let currentTranslate = 0; 
const imageWidth = 310; 


function shuffleImages() {
  const shuffled = images.slice(); 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


function addImages() {
  const shuffledImages = shuffleImages();
  shuffledImages.forEach((imgSrc) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = 'Immagine galleria';
    imgElement.classList.add('gallery-image');
    galleryWrapper.appendChild(imgElement);
  });
}


function startContinuousScroll() {
  function step() {
    
    currentTranslate -= 0.3; 
    galleryWrapper.style.transform = `translateX(${currentTranslate}px)`;

    
    const firstImage = galleryWrapper.querySelector('.gallery-image');
    if (firstImage && firstImage.getBoundingClientRect().right < 0) {
      galleryWrapper.removeChild(firstImage);
      currentTranslate += imageWidth; 
    }

    
    if (galleryWrapper.scrollWidth - Math.abs(currentTranslate) < window.innerWidth) {
      addImages(); 
    }

    requestAnimationFrame(step); 
  }

  step(); 
}


addImages();
addImages(); 


startContinuousScroll();


