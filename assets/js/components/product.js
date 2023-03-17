function products (products) {

    const db = JSON.parse(window.localStorage.getItem("products")) || products



    function printProducts() {
        const productsDOM = document.querySelector(".products__container")
        let htmlProduct = ""

        for(let product of db){
            htmlProduct += `
            <article class="product">
                <div class="product__image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product__content">
                    <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                        <i class="bx bx-cart-add"></i>
                    </button>
                    <span class="product__price">$${product.price}</span>
                    <span class="product__stock">Disponibles: ${product.quantity}</span>
                    <h4 class="product__title">${product.name}</h4>
                </div>
            </article>`
        }

        productsDOM.innerHTML = htmlProduct
        window.localStorage.setItem("products", JSON.stringify(db))
    }

    printProducts()

    return {
        db,
        printProducts
    }
}

export default products