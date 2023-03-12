async function getProducts () {
    try {
        const res = await window.fetch("https://ecommercebackend.fundamentos-29.repl.co/")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getProducts