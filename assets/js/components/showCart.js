function showCart () {
    const btnCart = document.querySelector(".btn--cart")
    const cartSection = document.querySelector(".cart")

    btnCart.addEventListener("click", function() {
        cartSection.classList.toggle("show--cart")
    })

    cartSection.addEventListener("click", function(e) {
        if(e.target.closest(".btn--close")){
            this.classList.remove("show--cart")
        }
    })
}

export default showCart