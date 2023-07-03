const products = [
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image: "images/products/ks1.jpeg",
        name: "Kizumonogatari - Kiss-shot Acerola-orion Heart-under-blade - 1/8 - 12 Year Old ver.",
        rating: {
          stars: 5,
          count: 317
        },
        priceCents: 7571,
        keywords: [
          "figurine",
          "anime",
          "monogatari"
        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        image: "images/products/senjo1.jpeg",
        name: "Zoku Owarimonogatari - Senjougahara Hitagi - Coreful Figure - Taito Crane Limited (Taito)",
        rating: {
          stars: 5,
          count: 1293
        },
        priceCents: 6289,
        keywords: [
          "figurine",
          "anime",
          "monogatari"
        ]
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        image: "images/products/ougi1.jpeg",
        name: "Monogatari Series: Second Season - Oshino Ougi - 1/8",
        rating: {
          stars: 4.5,
          count: 123
        },
        priceCents: 5682,
        keywords: [
          "figurine",
          "anime",
          "monogatari"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        image: "images/products/nana1.jpeg",
        name: "Katanagatari - Yasuri Nanami - Nendoroid Petit (Good Smile Company)",
        rating: {
          stars: 4.5,
          count: 1234
        },
        priceCents: 3598,
        keywords: [
          "figurine",
          "anime",
          "katanagatari"
        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        image: "images/products/shichi1.jpeg",
        name: "Katanagatari - Yasuri Shichika - Nendoroid Petit (Good Smile Company)",
        rating: {
          stars: 4.5,
          count: 986
        },
        priceCents: 3598,
        keywords: [
          "figurine",
          "anime",
          "katanagatari"
        ]
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        image: "images/products/toga1.jpeg",
        name: "Katanagatari - Togame - Nendoroid Petit (Good Smile Company)",
        rating: {
          stars: 4.5,
          count: 1296
        },
        priceCents: 3598,
        keywords: [
          "figurine",
          "anime",
          "katanagatari"
        ]
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/products/mono1.jpeg",
        name: "MONOGATARI Series Box Set Season 1",
        rating: {
          stars: 5,
          count: 2197
        },
        priceCents: 6198,
        keywords: [
            "novel",
            "anime",
            "monogatari"
        ]
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "images/products/mono2.jpeg",
        name: "MONOGATARI Series Box Set, Season 2",
        rating: {
          stars: 5,
          count: 1228
        },
        priceCents: 6973,
        keywords: [
            "novel",
            "anime",
            "monogatari"
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "images/products/mono3.jpeg",
        name: "MONOGATARI Series Box Set, Final Season",
        rating: {
          stars: 5,
          count: 474
        },
        priceCents: 7585,
        keywords: [
            "novel",
            "anime",
            "monogatari"
        ]
    }, 
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
              ${product.rating.count.toLocaleString("en-US")}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
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