const toggleModal = document.querySelector("#toggle-modal");
const modal = document.querySelector("#modal");
const body = document.querySelector("body");
const closeModal = document.querySelector(".modal__content__close");

// Open Modal on click View Image Button
toggleModal.addEventListener("click", () => modal.classList.add("open"));
// Close Modal on click "Close" Button
closeModal.addEventListener("click", () => modal.classList.remove("open"));
// Close Modal on click modal background
modal.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  } else if (modal.classList.contains("open")) {
    modal.classList.remove("open");
  }
});
