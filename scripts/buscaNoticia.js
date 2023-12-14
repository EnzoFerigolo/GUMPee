export default async function buscaNoticia(index) {
  const resposta = await fetch("noticias.json");
  if (!resposta.ok) {
    throw new Error(
      `Não foi possível carregar o arquivo JSON. Status: ${resposta.status}`
    );
  }

  const data = await resposta.json();
  const noticia = data.noticia[index];

  if (noticia === undefined) {
    throw new Error(`Notícia não encontrada para o índice ${index}`);
  }
  return noticia;
}
