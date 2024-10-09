function sendEmail(event) {
  event.preventDefault(); // Previene il comportamento predefinito del modulo

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Nuovo messaggio da ${name}`;
  const body = `Nome: ${name}\nEmail: ${email}\nMessaggio:\n${message}`;

  const mailtoLink = `mailto:playerapex95@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink; // Apre il client di posta
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

setInterval(nextImage, 3000);

document.querySelector(".next").addEventListener("click", () => {
  nextImage();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
});

// Scorri verso l'alto quando si clicca sul pulsante
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Scorrimento dolce
  });
});

// Aggiunge la classe "header-scrolled" all'header quando si scorre in basso
window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
};

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const backgroundImage = document.querySelector(".background-image");

  // Modifica la posizione dell'immagine di sfondo in base alla posizione di scorrimento
  backgroundImage.style.backgroundPosition = `center ${
    -scrollPosition * 0.5
  }px`; // Inverti il segno per movimento inverso
});

// menu a tendina
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Apre/chiude il menu al clic del bottone
  menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });

  // Nasconde il menu cliccando fuori da esso
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
  // Trova l'elemento home-section
  const homeSection = document.querySelector('.home-section');
  // Aggiungi la classe animate dopo un breve ritardo
  setTimeout(() => {
    homeSection.classList.add('animate');
  }, 200); // Puoi regolare il ritardo se necessario
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti gli elementi della lista
  const elements = document.querySelectorAll(".home-section li");

  // Definisci l'opzione per il nostro observer (attivato quando il 30% è visibile)
  const options = {
    threshold: 0.3
  };

  // Crea un observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Aggiunge la classe visibile se l'elemento è nel viewport
        entry.target.classList.add('visible');
        // Disattiva l'osservatore per evitare ripetizioni
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Osserva ogni elemento
  elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutte le icone e le descrizioni
  const items = document.querySelectorAll(".pizza-svg12, .description-container12");

  // Crea l'Intersection Observer per monitorare gli elementi
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aggiunge la classe 'in-view' se l'elemento è visibile
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          // Aggiunge la classe 'out-of-view' quando l'elemento esce dalla viewport
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.3, // Trigger dell'animazione al 30% di visibilità
    }
  );

  // Osserva ogni elemento con l'Observer
  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutte le icone e le descrizioni
  const items = document.querySelectorAll(".pizza-svg, .description-container");

  // Crea l'Intersection Observer per monitorare gli elementi
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aggiunge la classe 'in-view' se l'elemento è visibile
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          // Aggiunge la classe 'out-of-view' quando l'elemento esce dalla viewport
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.3, // Trigger dell'animazione al 30% di visibilità
    }
  );

  // Osserva ogni elemento con l'Observer
  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti gli elementi del menu
  const items = document.querySelectorAll(".menu-item");

  // Crea l'Intersection Observer per monitorare gli elementi
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aggiunge la classe 'in-view' se l'elemento è visibile
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
        } else {
          // Aggiunge la classe 'out-of-view' quando l'elemento esce dalla viewport
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    },
    {
      threshold: 0.8, // Trigger dell'animazione al 30% di visibilità
    }
  );

  // Osserva ogni elemento con l'Observer
  items.forEach((item) => observer.observe(item));
});


