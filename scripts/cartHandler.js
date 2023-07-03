
if (localStorage.getItem("cart") == undefined) {
    localStorage.setItem("cart", "[]");
}

let localCart = [];
function loadCart() {
    localCart = JSON.parse(localStorage.getItem("cart"));
}

let found; 
function findProduct(id) {
    products.forEach((product) => {
        if (product.id == id) {
            found = product;
        }
    });
}