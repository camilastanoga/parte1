document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém o valor do campo de email
    var email = document.getElementById("email").value;

    // Mostra a mensagem de agradecimento
    var messageElement = document.getElementById("message");
    messageElement.textContent = `Obrigado pelo seu email, ${email}! 😊`;
    messageElement.classList.remove("hidden");

    // Limpa o campo de email
    document.getElementById("email").value = "";
});
