import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/product.js";
import getProducts from "./helpers/getProducts.js";

// Ocultar loader
loader()

// Show Menu
showMenu()

// Show Cart
showCart()

// Products
products(await getProducts())