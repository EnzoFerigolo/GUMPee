export default async function atualizaBlog() {
  async function buscaNoticia() {
    return await fetch("noticias/noticias.json")
      .then((r) => r.json())
      .then((dados) => {
        return dados.noticia;
      });
  }
  const noticias = await buscaNoticia();
  async function escreveNoBlog(noticias) {
    for (let index = 0; index < noticias.length; index++) {
      const noticia = noticias[index];
      const containerNoticia = document.querySelector(`.noticia-${index}`);

      const elementoA = containerNoticia.querySelector("a");
      elementoA.setAttribute("href", `/noticias/noticia-${index}.html`);

      const imgNoticia = containerNoticia.querySelector("img");
      imgNoticia.setAttribute("src", noticia.imagem);

      const dataNoticia = containerNoticia.querySelector("h3");
      dataNoticia.innerText = noticia.data;

      const tituloNoticia = containerNoticia.querySelector("h2");
      tituloNoticia.innerText = noticia.titulo;
      console.log(containerNoticia);
    }
  }
  await escreveNoBlog(noticias);
}

atualizaBlog();
