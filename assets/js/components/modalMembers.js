function modalMembers () {
    const btnMembers = document.querySelector(".btn__members")
    const modalMembers = document.querySelector(".modal__members")
    const btnModalClose = document.querySelector(".modal__close")
    // const btnPayment = document.querySelectorAll(".footer__payments")

    btnMembers.addEventListener("click", function (e) {
        e.preventDefault()
        modalMembers.classList.add("modal--show")
    })

    btnModalClose.addEventListener("click", function (e) {
        e.preventDefault()
        modalMembers.classList.remove("modal--show")
    })

    // btnPayment.addEventListener('click', function(event) {
    //     event.preventDefault();
    // });
}

export default modalMembers
