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

var footerAltura = document.querySelector("footer").offsetTop;

var whats = document.querySelector(".whats");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= footerAltura - 400) {
    whats.classList.add("hide");
  } else whats.classList.remove("hide");
});
