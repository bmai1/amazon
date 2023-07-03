
window.addEventListener('load', () => {
  loadCart();
  cart = localCart;
  let tmp = 0; 
  cart.forEach((item) => {
    tmp += item.quantity;
  })
  document.querySelector('.js-cart-quantity').innerHTML = tmp;
});



let productsHTML = '';

products.forEach((product) => {
    // accumulator pattern, iterating using forEach and adding to generate HTML
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count.toLocaleString("en-US")}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
    
});

// put on webpage using dom
document.querySelector('.js-products-grid').innerHTML = productsHTML;

timeoutId = undefined;
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    // clearTimeout(timeoutId); why doesn't this work for unique products
    const productId = button.dataset.productId;

    let quantity = parseInt(document.querySelector(`.js-quantity-selector-${productId}`).value);
    let addPopup = document.querySelector(`.js-added-${productId}`);

    addPopup.style.transition = "";
    addPopup.style.opacity = 1;
    timeoutId = setTimeout(() => {
      addPopup.style.transition = "ease-out 1s";
      addPopup.style.opacity = 0;
    }, 2000);

    let matchingItem; 
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) { matchingItem.quantity += quantity; }
    else cart.push({
      productId: productId, 
      quantity: quantity
    });

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    // store cart in place of database
    localStorage.setItem("cart", JSON.stringify(cart));

    // document.querySelector('.js-cart-quantity').innerHTML = cart.length; // for sorting by unique
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});
