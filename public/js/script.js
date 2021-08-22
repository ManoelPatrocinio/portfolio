document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".containerP").classList.toggle("show-menu")
  );

document.querySelector("#ButtonAboutMe").addEventListener("click", () => {
  openModal();
});



document.querySelector("#nome").addEventListener("blur", (e) => {
  const nome = document.querySelector("#nome").value;
 
  if (nome !== '') {
    document.querySelector("#nome").classList.add("campoValid");
  }else {
    document.querySelector("#nome").classList.remove("campoValid");
    document.querySelector("#nome").classList.add("campoInvalid");
  }
});

document.querySelector("#email").addEventListener("blur", () => {
  validacaoEmail();
});

function openModal() {
  const modal = document.querySelector(".modal-content");
  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal" || e.target.id === "closeModal") {
      modal.classList.remove("mostrar");
    }
  });
}

function validacaoEmail() {
  let status = null;
  field = document.getElementById("email");
  usuario = document
    .getElementById("email")
    .value.substring(0, field.value.indexOf("@"));
  dominio = document
    .getElementById("email")
    .value.substring(field.value.indexOf("@") + 1, field.value.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
    
  ) {
    field.classList.add("campoValid");

  } else {
    field.classList.add("campoInvalid");
    document.getElementById("email").innerHTML = "";
  }
  return status;
}

// efeito de escrito na pagina


