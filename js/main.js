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


 function downloadVCard() {
  // Dati di Filippo Badia
  const contact = {
    firstName: "Filippo",
    lastName: "Badia",
    phone: "+393478380328", // Inserisci il numero reale
    email: "filippo@badiasilvano.it", // Inserisci l'email reale
    org: "Badia Silvano di Badia Andrea"
  };

  // Costruzione vCard standard
  const vcard = "BEGIN:VCARD\n" +
                "VERSION:3.0\n" +
                "FN:" + contact.firstName + " " + contact.lastName + "\n" +
                "N:" + contact.lastName + ";" + contact.firstName + ";;;\n" +
                "TEL;TYPE=CELL:" + contact.phone + "\n" +
                "EMAIL:" + contact.email + "\n" +
                "ORG:" + contact.org + "\n" +
                "END:VCARD";

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.firstName + "_" + contact.lastName + ".vcf";
  newLink.href = url;
  
  newLink.click();
  window.URL.revokeObjectURL(url);
}

// Animazione hamburger
document.querySelectorAll('.custom-toggler').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});