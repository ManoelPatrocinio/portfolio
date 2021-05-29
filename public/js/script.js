
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

/*
//a cada mudança no campo, e aciona o função updatePrice //
document.querySelector("#qtd").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice) 
document.querySelector("#layout-sim").addEventListener("change", updatePrice)
document.querySelector("#layout-nao").addEventListener("change", updatePrice)

document.querySelector("#prazo").addEventListener("change", function() {

   const prazo = document.querySelector("#prazo").value
   document.querySelector("label[for=prazo]").innerHTML  = `Prazo: ${prazo} semanas`
   updatePrice() 
})



function updatePrice(){
   
   const qtd = document.querySelector("#qtd").value //captura o valor do input QTD //
   const temJs = document.querySelector("#js").checked
   const layout = document.querySelector("#layout-sim").checked
   const prazo = document.querySelector("#prazo").value

   let preco = qtd * 100
   if(temJs) preco *= 1.1 //calcula os 10% do scriptJs
   if(layout) preco += 500
   let taxaUrgencia = 1 - prazo*0.1;
   preco *= 1 + taxaUrgencia

   document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2) //label Preco recebe o valor atualizado de// 
   
   
};

*/
