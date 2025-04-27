const products = [
    { id: 1, name: "Red Shoes", image: "images/image.png", price: 2499},
    { id: 2, name: "Blue T-Shirt", image: "images/image1.png", price: 699},
    { id: 3, name: "Green Hat", image: "images/image2.png", price: 299},
    { id: 4, name: "Yellow Jacket", image: "images/image3.png", price: 1299},
    { id: 5, name: "sanji", image:"images/image4.png", price: 499},
    
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartDropdown = document.getElementById("cart-dropdown");
const cartBtn = document.getElementById("cart-btn");
const searchInput = document.getElementById("search");


//render products//
function renderProducts(productArray){
    productList.innerHTML = "";
    productArray.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="info">
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
        `;
        productList.appendChild(card);
    });
    }

    function addToCart(productId){
        const item = products.find((p) => p.id === productId);
        cart.push(item);
        updateCart();
    }

    function updateCart(){
        cartCount.innerText = cart.length;
        cartItems.innerHTML = "";

        if (cart.length === 0){
            cartItems.innerHTML = "<li>Your cart is empty.</li>";
            return;
        }

        cart.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
             <div class="cart-item">
             <img src="${item.image}" alt="${item.name}" />
             <div class="cart-info">
             <p>${item.name}</p>
             <span>₹${item.price}</span>
             </div>
             </div>
             `;
             cartItems.appendChild(li);
        });
    }

    cartBtn.addEventListener("click", () => {
        cartDropdown.classList.toggle("hidden");
    });


//search funtionality//
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        const filtered = products.filter((p) => 
            p.name.toLowerCase().includes(searchText)
    );
    renderProducts(filtered);
    });


//initial render//
    renderProducts(products);