
document.querySelector(".hamburguer").addEventListener("click",()=>
   document.querySelector(".container").classList.toggle("show-menu")

);


document.querySelector('#ButtonAboutMe').addEventListener("click",() =>{
   openModal();
})

function openModal(){
   const modal=  document.querySelector(".modal-content");
   modal.classList.add('mostrar');

   modal.addEventListener('click', (e)=>{
      if(e.target.id === "modal" || e.target.id === "closeModal"){
         modal.classList.remove('mostrar')
      }
   })
}

function validacaoEmail() {
   let status = null;
   field = document.getElementById("email")
   usuario = document.getElementById("email").value.substring(0, field.value.indexOf("@"));
   dominio = document.getElementById("email").value.substring(field.value.indexOf("@")+ 1, field.value.length);

   if ((usuario.length >=1) &&
     (dominio.length >=3) &&
     (usuario.search("@")==-1) &&
     (dominio.search("@")==-1) &&
     (usuario.search(" ")==-1) &&
     (dominio.search(" ")==-1) &&
     (dominio.search(".")!=-1) &&
     (dominio.indexOf(".") >=1)&&
     (dominio.lastIndexOf(".") < dominio.length - 1)) {
     document.getElementById("msgemail").innerHTML="E-mail válido";
     alert("E-mail valido");
     status = true;
   } else{
   //   document.getElementById("email").innerHTML="<font color='red'>E-mail inválido </font>";
     alert("E-mail invalido");
     status = false;
   }
   return status

 }

