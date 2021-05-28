const formContato = document.querySelector('.form-contato');

let name     = document.getElementById('nome');
let email    = document.getElementById('email');
let mensagem = document.getElementById('mensagem');

formContato.addEventListener('submit', (e)=>{
    e.preventDefault(); //impede que a pagina recarrege 

    let contatoData = {
        name: name.value,
        email:email.value,
        mensagem: mensagem.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('E-mail Enviado !!');
            document.querySelector(".form-contato").reset();
        }else{
            alert("Algo errado, Tente de novo!")
        }
    }

    xhr.send(JSON.stringify(contatoData))
})