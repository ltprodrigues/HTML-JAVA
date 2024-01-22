const form = document.getElementById('form-depsoito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById(valor-deposito);
    const mensagemSucesso = 'Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>'

    formEValido = validaNome(nomeBeneficario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('sucess-message');
        const containerMensagemSucesso = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = '';
        meroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert("Tudo certo");
    }
})

console.log(form);
