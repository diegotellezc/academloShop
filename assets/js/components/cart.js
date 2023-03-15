function cart (db, printProducts) {
    let cart = []

    // Elementos del DOM
    const productsDOM = document.querySelector(".products__container")
    const notifyDOM = document.querySelector(".notify")
    const cartBodyDOM = document.querySelector(".cart__body")
    const countDOM = document.querySelector(".cart__count--item")
    const totalDOM = document.querySelector(".cart__total--item")
    const checkoutDOM = document.querySelector(".btn--buy")

    // Funciones
    function printCart(){
        let htmlCart = ""

        if(cart.length === 0) {
            htmlCart = `
                <div class="cart__empty">
                    <i class="bx bx-cart"></i>
                    <p class="cart__empty--text">No hay productos en el carrito</p>
                </div>`
        } else {
            for(let item of cart) {
                const product = db.find(i => i.id === item.id)

                htmlCart += `
                    <article class="article">

                        <div class="article__image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>

                        <div class="article__content">
                            <h4 class="article__title">${product.name}</h4>
                            <span class="article__price">$${product.price}</span>

                            <div class="article__quantity">
                                <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                                    <i class="bx bx-minus"></i>
                                </button>

                                <span class="article__quantity-text">${item.qty}</span>

                                <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}">
                                    <i class="bx bx-plus"></i>
                                </button>
                            </div>

                            <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </article>`
            }
        }

        if(cart.length === 0) {
            notifyDOM.classList.remove("show--notify")
        } else {
            notifyDOM.classList.add("show--notify")
        }

        cartBodyDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()

    }

    function addToCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)

        if(itemFound) {
            itemFound.qty += qty
        } else {
            cart.push({ id, qty })
        }

        printCart()
    }

    function removeFromCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)

        const result = itemFound.qty - qty
        if(result > 0) {
            itemFound.qty -= qty
        } else {
            cart = cart.filter(i => i.id !== id)
        }

        printCart()
    }

    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !== id)
        printCart()
    }

    function showItemsCount() {
        let suma = 0

        for(const item of cart) {
            suma += item.qty
        }

        return suma
    }

    function showTotal() {
        let total = 0
        for(const item of cart) {
            const productFound = db.find(p => p.id === item.id)
            total += productFound.price * item.qty
        }

        return total
    }

    function checkout() {
        for(const item of cart) {
            const productFound = db.find(p => p.id === item.id)
            productFound.quantity -= item.qty
        }

        cart = []
        printCart()
        printProducts()
        alert("Gracias por tu compra")
    }

    printCart()

    // Eventos

    productsDOM.addEventListener("click", function(e) {
        if(e.target.closest(".add--to--cart")) {
            const id = +e.target.closest(".add--to--cart").dataset.id
            addToCart(id)
            
            for(const item of cart) {
                const productFound = db.find(p => p.id == item.id)
                console.log("Producto encontrado: ", productFound)

                if(productFound.quantity < item.qty){
                    alert(`Lo sentimos. Sólo tenemos ${productFound.quantity} productos disponibles en este estilo. No puedes agregar más veces este articulo.`)
                    removeFromCart(id)
                }
            }
        }
    })
    

    cartBodyDOM.addEventListener("click", function (e){
        if(e.target.closest(".article--minus")) {
            const id = +e.target.closest(".article--minus").dataset.id
            removeFromCart(id)
        }

        if(e.target.closest(".article--plus")) {
            const id = +e.target.closest(".article--plus").dataset.id
            addToCart(id)

            for(const item of cart) {
                const productFound = db.find(p => p.id == item.id)
                console.log("Producto encontrado: ", productFound)

                if(productFound.quantity < item.qty){
                    alert(`Lo sentimos. Sólo tenemos ${productFound.quantity} productos disponibles en este estilo. No puedes agregar más veces este articulo.`)
                    removeFromCart(id)
                }
            }

        }

        if(e.target.closest(".remove-from-cart")) {
            const id = +e.target.closest(".remove-from-cart").dataset.id
            deleteFromCart(id)
        }
    })

    checkoutDOM.addEventListener("click", function() {
        checkout()
    })
    
}

export default cart