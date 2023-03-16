function modalThanks() {
    const modalThanks = document.querySelector(".modal__thanks")
    const modalMembers = document.querySelector(".modal__members")
    const btnModalCloseThanks = document.querySelector(".modal__close__thanks")
    const formContainer = document.querySelector(".form__container")


    btnModalCloseThanks.addEventListener("click", function (e) {
        console.log("Esta funcionando el evento de click")
        e.preventDefault()
        modalThanks.classList.remove("modal--show")
        formContainer.classList.remove("active")
    })

}

export default modalThanks
