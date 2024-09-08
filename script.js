let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

// Change the main image and update product details
function changeImage(element) {
    const mainImage = document.getElementById('main-product-image');
    const title = document.getElementById('product-title');
    const price = document.getElementById('product-price');
    const description = document.getElementById('product-description');

    mainImage.src = element.src; // Set the clicked thumbnail's source as the main image

    // Update product details based on the clicked thumbnail
    title.textContent = element.getAttribute('data-title');
    price.textContent = `$${element.getAttribute('data-price')}`;
    description.textContent = element.getAttribute('data-description');
}

// Add to Cart functionality
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const productName = document.getElementById('product-title').textContent;
    const productPrice = parseFloat(document.getElementById('product-price').textContent.replace('$', ''));

    cartCount += quantity;
    cartItems.push({ name: productName, quantity: quantity, price: productPrice });

    updateCart();
    alert('Item added to cart!');
}

// Update the Cart
function updateCart() {
    document.getElementById('cart-count').textContent = cartCount;
    
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    totalPrice = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to toggle cart modal visibility
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex"; // Use flex to center content
    }
}

// Event listener to show modal when cart icon is clicked
document.querySelector('.cart-icon').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    toggleCartModal();
});

// Close Modal when clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
