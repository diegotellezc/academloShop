function showCart () {
    const btnCart = document.querySelector(".btn--cart")
    const cart = document.querySelector(".cart")

    btnCart.addEventListener("click", function() {
        cart.classList.toggle("show--cart")
    })

    cart.addEventListener("click", function(e) {
        if(e.target.closest(".btn--close")){
            this.classList.remove("show--cart")
        }
    })
}

export default showCart