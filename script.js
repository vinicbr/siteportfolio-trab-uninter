
// Pegando o botão do contact.html
const button = document.getElementById("button_contact");
console.log(button);

// Mostrando uma janela ao clicar em enviar
button.addEventListener("click", function (event) {
    alert("Mensagem enviada com sucesso!");
});

