function cart (db, printProducts) {
    let cart = []

    function printCart(){
        console.log("Carrito:")
        console.log(cart)
        console.log("Items: " + showItemsCount())
        console.log("Total: " + showTotal())
    }

    function addToCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)

        if(itemFound) {
            console.log("El producto con el id " + id + " ya está")
            itemFound.qty += qty
        } else {
            console.log("El producto con el id " + id + " no está")
            cart.push({ id, qty })
        }

        printCart()
    }

    addToCart(1)
    addToCart(2)
    addToCart(2)
    addToCart(2)

    function removeFromCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)

        const result = itemFound.qty - qty
        if(result > 0) {
            console.log("Quedan productos con el id " + id)
            itemFound.qty -= qty
        } else {
            console.log("No quedan productos con el id " + id)
            cart = cart.filter(i => i.id !== id)
        }

        printCart()
    }

    // removeFromCart(2)
    // removeFromCart(2)
    // removeFromCart(2)

    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !== id)
        console.log("Se eliminó el producto con el id " + id)
        printCart()
    }

    // deleteFromCart(2)

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

    // checkout()
}

export default cart