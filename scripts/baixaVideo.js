const p = require("puppeteer");
const fs = require("fs");
const lista = [];

(async () => {
  const nav = await p.launch({ headless: false });
  const page = await nav.newPage();
  await page.goto("https://www.instagram.com/gumpee.oficial/", {
    waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"],
  });

  const links = await page.evaluate(() => {
    const imgs = document.querySelectorAll("article a");
    const hrefs = [...imgs].map((img) => {
      return img.href;
    });
    return hrefs;
  });
  await page.close();
  console.log(links);

  for (const link of links) {
    const pagina = await nav.newPage();
    await pagina.goto(link, {
      waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"],
    });
    const linkVideo = await pagina.evaluate(() => {
      const video = document.querySelector("video");
      if (video) return video.src;
    });
    console.log(linkVideo);
    if (linkVideo) lista.push(linkVideo);

    await pagina.close();
  }

  console.log(lista);
  await nav.close();

  fs.writeFile("instagram.json", JSON.stringify(lista, null, 2), (erro) => {
    if (erro) throw new Error("Vish, deu ruim!");
    else console.log("Deu bom!");
  });
})();
