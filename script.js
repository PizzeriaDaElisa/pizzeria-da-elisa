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

// Seleziona il titolo
const title = document.querySelector('.extra-content h1');

// Funzione per aggiornare la larghezza del bordo in base allo scorrimento
function updateBorderWidth() {
  const rect = title.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calcola la percentuale di visibilità del titolo rispetto al viewport
  const visibility = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));

  // Imposta la larghezza del bordo in base alla visibilità (0% a 100%)
  title.style.setProperty('--border-width', `${visibility * 100}%`);
}

// Aggiungi un listener allo scorrimento
window.addEventListener('scroll', updateBorderWidth);

// Imposta la larghezza iniziale del bordo (opzionale)
updateBorderWidth();



document.addEventListener("DOMContentLoaded", function () {
  // Trova l'elemento home-section
  const homeSection = document.querySelector('.home-section');
  // Aggiungi la classe animate dopo un breve ritardo
  setTimeout(() => {
    homeSection.classList.add('animate');
  }, 200); // Puoi regolare il ritardo se necessario
});