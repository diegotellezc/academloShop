function modalThanks() {
    const modalThanks = document.querySelector(".modal__thanks")
    const btnModalCloseThanks = document.querySelector(".modal__close__thanks")
    const formContainer = document.querySelector(".form__container")


    btnModalCloseThanks.addEventListener("click", function (e) {
        e.preventDefault()
        modalThanks.classList.remove("modal--show")
        formContainer.classList.remove("active")
    })

}

export default modalThanks
