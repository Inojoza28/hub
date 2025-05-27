document.addEventListener("DOMContentLoaded", function () {
  // Adicionar efeito de clique nos cards
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      window.location.href = "https://www.paguebembrasil.com.br/entrar";
    });
  });


  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Ajuste para o header fixo
          behavior: "smooth",
        });
      }
    });
  });
});
