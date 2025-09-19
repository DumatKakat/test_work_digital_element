const button = document.querySelector("#modal_button");
const modalBack = document.querySelector(".modal_background");
const closeBut = document.querySelector(".modal_close");

button.addEventListener("click", () => {
  modalBack.style.display = "flex";
});
closeBut.addEventListener("click", () => {
  modalBack.style.display = "none";
});

modalBack.addEventListener("click", (event) => {
  if (event.target === modalBack) {
    modalBack.style.display = "none";
  }
});
