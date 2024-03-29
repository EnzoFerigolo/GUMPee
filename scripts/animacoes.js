export default function animacoes() {
  // Hover no menu ativo

  const links = document.querySelectorAll(".links-menu a");

  links.forEach((link) => {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add("ativo");
    }
  });

  // Lista

  const itemLista = document.querySelectorAll(".lista button");

  itemLista.forEach((item) => {
    item.addEventListener("click", (event) => {
      const controls = event.currentTarget.getAttribute("aria-controls");
      const resposta = document.getElementById(controls);

      resposta.classList.toggle("ativa");

      event.currentTarget.setAttribute(
        "aria-expanded",
        resposta.classList.contains("ativa")
      );
    });
  });

  // Perguntas frequentes

  const itemPergunta = document.querySelectorAll(".faq button");

  itemPergunta.forEach((item) => {
    item.addEventListener("click", (event) => {
      const controls = event.currentTarget.getAttribute("aria-controls");
      const resposta = document.getElementById(controls);
      resposta.classList.toggle("ativa");

      event.currentTarget.setAttribute(
        "aria-expanded",
        resposta.classList.contains("ativa")
      );
    });
  });

  // Botão do WhatsApp

  const footerAltura = document.querySelector("footer").offsetTop;

  const whats = document.querySelector(".whats");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= footerAltura - 700) {
      whats.classList.add("hide");
    } else whats.classList.remove("hide");
  });

  // Pop-up de doação

  const dialog = document.querySelector("dialog");
  const btnFechar = document.querySelector(".btn-fechar");

  if (dialog) {
    dialog.showModal();
    ["click", "touchend"].forEach((evento) => {
      btnFechar.addEventListener(evento, () => {
        dialog.close();
      });
    });
  }
}
