document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".containerP").classList.toggle("show-menu")
  );

document.querySelector("#ButtonAboutMe").addEventListener("click", () => {
  openModal();
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



