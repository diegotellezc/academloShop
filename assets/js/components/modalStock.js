function modalStock () {
    const modalStock = document.querySelector(".modal__stock")
    const btnModalCloseStock = document.querySelector(".modal__close__stock")


    btnModalCloseStock.addEventListener("click", function (e) {
        console.log("Esta funcionando el evento de click")
        e.preventDefault()
        modalStock.classList.remove("modal--show")
    })
}

export default modalStock