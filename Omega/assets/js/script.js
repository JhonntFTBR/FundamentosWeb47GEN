/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName
por Seletor: querySelector()
*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


function validaNome() {
let txtNome = document.querySelector('#txtNome')
if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
}else{
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
}

}


function validaEmail() {
let txtEmail = document.querySelector('#txtemail')

if (email.value.indexOf('@') == -1  || email.value.indexOF('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
} else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
}

}

function validaAssunto () {
let txtAssunto = document.querySelector(' #txtassunto')

if (assunto.value.lenght >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
}else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
}

}

function enviar () {
    if (nomeOk == true && emailOK == true && assuntoOK == true){
    alert ('Formulário enviado com sucesso!')
} else {
alert ('Preencha o formulario corretamente antes de enviar....')

}
}