function modalCheckout () {
    const modalCheckout = document.querySelector(".modal__checkout")
    const modalMembers = document.querySelector(".modal__members")
    const btnModalCloseCheckout = document.querySelector(".modal__close__checkout")
    const formContainer = document.querySelector(".form__container")


    btnModalCloseCheckout.addEventListener("click", function (e) {
        console.log("Esta funcionando el evento de click")
        e.preventDefault()
        modalCheckout.classList.remove("modal--show")
    })
}

export default modalCheckout