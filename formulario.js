const form = document.querySelector("form");
const formContato = document.querySelector(".form-contato");
console.log(formContato);

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(form);
  fetch("/enviar.php", {
    method: "POST",
    body: data,
  }).then((resposta) => {
    if (resposta.ok) {
      formContato.innerHTML =
        '<h1 class="font-2-m cor-a4 col-2"><span>Mensagem enviada!</span> Obrigado por entrar em contato com a GUMPee.</h1>';
    } else
      formContato.innerHTML =
        '<h1 class="font-2-m cor-a4 col-2"><span>Mensagem não enviada.</span> Por favor, recarregue a página e tente novamente. Se o erro persistir, contate-nos pelo nosso WhatsApp!</h1>';
  }); console.log(formContato)
});
