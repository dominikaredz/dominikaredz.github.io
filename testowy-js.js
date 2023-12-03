// Pobranie referencji do elementu box-offer
const boxOffer = document.getElementById("box-offer");

// Funkcja sprawdzająca, czy element jest widoczny w oknie przeglądarki
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Funkcja obsługująca pojawienie się elementu przy scrollowaniu
function handleScroll() {
  if (isElementInViewport(boxOffer)) {
    boxOffer.classList.add("visible");
    // Usunięcie event listenera, jeśli nie chcesz, aby efekt powtarzał się po pierwszym pojawieniu się
    window.removeEventListener("scroll", handleScroll);
  }
}

// Dodanie event listenera do scrolla
window.addEventListener("scroll", handleScroll);