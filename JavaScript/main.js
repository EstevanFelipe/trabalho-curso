function resetForm() {
    document.getElementById("my-form").reset();
    document.querySelector('.mensagem-sucesso').innerHTML = ''; // Limpa a mensagem de sucesso
    document.querySelector('.mensagem-error').innerHTML = ''; // Limpa a mensagem de erro
}

document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Enviará nosso Formulario

    let campoA = parseFloat(document.getElementById('campoA').value); // Resgatará o valor do Campo A
    let campoB = parseFloat(document.getElementById('campoB').value); // Resgatará o valor do Campo B

    let mensagemSucesso = `O <b>${campoB.valueOf()}</b> é maior que o <b>${campoA.valueOf()}</b>!!`;
    let mensagemError = `O <b>${campoB.valueOf()}</b> não é maior que o <b>${campoA.valueOf()}</b>!!`;

    if (campoB > campoA) {
        const containerMensagemError = document.querySelector('.mensagem-error');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = "block";
    } else {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
    }
})