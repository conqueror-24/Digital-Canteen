let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartList = document.querySelector('.cart-list');
    const cartTotalElement = document.querySelector('.cart-total');

    cartList.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        const itemPrice = parseInt(item.price.replace('Rs.', '').replace('/-', ''));
        totalCost += itemPrice * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: Rs.${itemPrice}/-</p>
            <p>Total: Rs.${itemPrice * item.quantity}/-</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });

    cartTotalElement.innerHTML = `Total: Rs.${totalCost}/-`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function checkout() {
    alert('Checkout initiated');
    cart = [];
    localStorage.removeItem('cart');
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', displayCartItems);

const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', checkout);
