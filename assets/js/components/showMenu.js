function showMenu () {
    const nav = document.querySelector(".nav")
    const menu = document.querySelector(".nav__menu")

    nav.addEventListener("click", function(e) {
        if(e.target.closest(".btn--menu")){
            menu.classList.toggle("show-menu")
        }

        if(e.target.closest(".btn--close")){
            menu.classList.remove("show-menu")
        }

        if(e.target.closest(".nav__items")){
            menu.classList.remove("show-menu")
        }
    })
}

export default showMenu