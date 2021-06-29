import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick);
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", () => handleClick(event, false));
});

function handleClick(event, check = true) {
    event.preventDefault();

    const slug = check ? "check" : "delete";

    const roomId = document.querySelector("#room-id").dataset.id;
    
    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/room/:${roomId}/:question/:${slug}`);

    modalTitle.innerHTML = check ? "Marcar como lida esta pergunta" : "Excluir esta pergunta";
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida essa pergunta?" : "Tem certeza que deseja excluir essa pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir";

    check ? modalButton.classList.remove("danger") : modalButton.classList.add("danger");

    modal.open();
}