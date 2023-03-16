function modalThanks() {
    const btnContactar = document.querySelector(".btn__submit")
    const modalThanks = document.querySelector(".modal__thanks")
    const btnModalClose = document.querySelectorAll(".modal__close")
    // const btnPayment = document.querySelectorAll(".footer__payments")

    btnContactar.addEventListener("click", function (e) {
        e.preventDefault()
        modalThanks.classList.add("modal--show")
    })

    btnModalClose.addEventListener("click", function (e) {
        e.preventDefault()
        btnModalClose.classList.remove("modal--show")
    })

    // btnPayment.addEventListener('click', function(event) {
    //     event.preventDefault();
    // });
}

export default modalThanks
