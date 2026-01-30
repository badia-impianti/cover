// LOGO RESIZE ON SCROLL

window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");

  // quanto abbiamo scrollato
  const scrollY = window.scrollY;

  // dimensione iniziale e minima
  const maxSize = 320;
  const minSize = 160;

  // calcolo progressivo
  let newSize = maxSize - scrollY * 0.4;

  // limiti
  if (newSize < minSize) newSize = minSize;
  if (newSize > maxSize) newSize = maxSize;

  logo.style.width = newSize + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

