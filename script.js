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

//coockies

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const rejectCookiesButton = document.getElementById("reject-cookies");

  // Controlla se l'utente ha già accettato o rifiutato i cookie
  if (
    !localStorage.getItem("cookiesAccepted") &&
    !localStorage.getItem("cookiesRejected")
  ) {
    cookieBanner.style.display = "block";
  }

  // Nascondi il banner e memorizza il consenso quando l'utente accetta i cookie
  acceptCookiesButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.removeItem("cookiesRejected"); // Rimuove eventuali rifiuti precedenti
    cookieBanner.style.display = "none";
  });

  // Nascondi il banner e memorizza il rifiuto quando l'utente rifiuta i cookie
  rejectCookiesButton.addEventListener("click", () => {
    localStorage.setItem("cookiesRejected", "true");
    localStorage.removeItem("cookiesAccepted"); // Rimuove eventuali accettazioni precedenti
    cookieBanner.style.display = "none";
  });
});
