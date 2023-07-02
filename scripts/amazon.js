const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/rei.jpg",
        name: "Evangelion GE-52302 Rei Plugsuit Stuffed Plush, 8\"",
        rating: {
            stars: 5,
            count: 69420
        },
        priceCents: 2098,
        keywords: [
          "plush",
          "anime",
          "evangelion"
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/products/shinji.jpg",
        name: "Evangelion Shinji Ikari Plugsuit Plush 8\"",
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 2081,
        keywords: [
            "plush",
            "anime",
            "evangelion"
        ]
      },
      {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/asuka.jpg",
        name: "Evangelion Asuka Langley Soryu Plugsuit Plush 8\"",
        rating: {
          stars: 4.5,
          count: 56
        },
        priceCents: 2000,
        keywords: [
            "plush",
            "anime",
            "evangelion"
        ]
      }
]

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
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `;
    
});

// put on webpage using dom
document.querySelector('.js-products-grid').innerHTML = productsHTML;