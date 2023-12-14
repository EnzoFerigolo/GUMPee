import buscaNoticia from "../scripts/buscaNoticia.js";

export default async function atualizaCaixaDeNoticias() {
  const container = document.querySelectorAll(".veja-tbm ul li");
  console.log(container);
  for (let index = 0; index < container.length; index++) {
    const liAtual = container[index];
    const noticia = await buscaNoticia(index);

    const elementoImg = liAtual.querySelector("img");
    elementoImg.setAttribute("src", noticia.imagem);

    const elementoh2 = liAtual.querySelector("h2");
    elementoh2.innerText = noticia.titulo;

    const data = liAtual.querySelector("h3");
    data.innerText = noticia.data;
  }
}

atualizaCaixaDeNoticias();
