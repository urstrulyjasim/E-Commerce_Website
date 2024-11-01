// Initialize cart from local storage or create a new array if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
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
    displayCartItems(); // Refresh the cart display
}

// Function to clear the entire cart
function clearCart() {
    cart = []; // Clear the cart array
    localStorage.removeItem('cart'); // Remove cart from localStorage
    displayCartItems(); // Refresh the cart display
}

// Function to display the cart items when the page loads
window.onload = displayCartItems;
