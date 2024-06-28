
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsSection = document.querySelector('.cart-items');

    if (cartItems.length === 0) {
        cartItemsSection.innerHTML = '<p>No items in the cart.</p>';
    } else {
        const totalPrice = calculateTotalPrice(cartItems);

        const itemsHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
        `).join('');

        cartItemsSection.innerHTML = itemsHTML;

        const paymentForm = document.getElementById('paymentForm');
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(paymentForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const cardNumber = formData.get('cardNumber');
            const expiry = formData.get('expiry');
            const cvv = formData.get('cvv');

           
            alert(`Payment Successful!\nTotal Amount: Rs.${totalPrice}/-`);

            
            localStorage.removeItem('cartItems');
            cartItemsSection.innerHTML = '<p>Payment successful. Thank you!</p>';
        });
    }
}

function calculateTotalPrice(cartItems) {
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseInt(item.price.replace('Rs.', '').replace('/-', ''));
        totalPrice += price * item.quantity;
    });
    return totalPrice;
}
