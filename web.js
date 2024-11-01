let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

// Initialize cart from local storage or create a new array if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to show the home page
function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

// Function to show the shops page
function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

// Function to show the blog page
function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

// Function to show the about page
function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

// Function to show the contact page
function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
    document.getElementById("about").style.color = "black";
}

// Function to open the cart in a new window
function carts() {
    window.open('cart.html', '_blank'); // Open the cart in a new window
}

// Function to show the product in the cart
function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
}

// Function to add an item to the cart
function addCart(item) {
    cart.push(item); // Add the item to the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    alert("Added To Cart");
}

// Load the cart items into the cart window
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the container

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    loadCart(); // Refresh the cart display
}

// Function to clear the entire cart
function clearCart() {
    cart = []; // Clear the cart array
    localStorage.removeItem('cart'); // Remove cart from localStorage
    loadCart(); // Refresh the cart display
}

// On page load, display the cart items
window.onload = () => {
    loadCart(); // Load cart items when the page loads
};
