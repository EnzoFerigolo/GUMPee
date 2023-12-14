import buscaNoticia from "/scripts/buscaNoticia.js";

export default async function escreveHtml(index) {
  const noticia = await buscaNoticia(index);
  escreveElementos(noticia);
  function escreveElementos(dadosNoticia) {
    const elementoTitulo = document.querySelector("h1.titulo-principal");

    elementoTitulo.innerText = dadosNoticia.titulo;

    const elementoA = document.querySelector("a.link-noticia");
    elementoA.setAttribute("href", dadosNoticia.link);

    elementoA.innerHTML = `<strong>Veja mais em: </strong>${dadosNoticia.link}`;

    const elementoAutor = document.querySelector("p.autor-noticia");

    elementoAutor.innerHTML = `<strong>Por:</strong> ${dadosNoticia.autor} <br />`;

    const elementoData = document.querySelector("p.data-noticia");
    elementoData.innerText = dadosNoticia.data;

    const elementoImg = document.querySelector(".noticia-txt img");
    elementoImg.style.backgroundImage = `url(${dadosNoticia.imagem})`;
    // elementoImg.setAttribute("src", dadosNoticia.imagem);

    const divTextoNoticia = document.querySelector("div.texto-noticia");
    divTextoNoticia.innerHTML = dadosNoticia.texto
      .split("<p>")
      .join("<p class='font-3-small cinza'>");
  }
}
