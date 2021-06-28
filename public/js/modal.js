export default function Modal() {
    const backButton = document.querySelector(".button.back");

    backButton.addEventListener("click", close);

    function open() {
        document.querySelector(".modal-wrapper").classList.add("active");
    }
    
    function close() {
        document.querySelector(".modal-wrapper").classList.remove("active");
    }

    return {
        open,
        close
    }
}