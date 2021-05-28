
document.querySelector(".hamburguer").addEventListener("click",()=>
   document.querySelector(".container").classList.toggle("show-menu")

);

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
