const menuItems = [
    {
        id: 1,
        name: 'Mysuru Masala Dosa',
        category: 'breakfast',
        price: 'Rs.50/-',
        description: 'Made with Mysuru Masalas',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/9b/0a/6f/mysore-masala-dosa.jpg',
        special: true,
        popular: true
    },
    {
        id: 9,
        name: 'Poori Baajhi',
        category: 'breakfast',
        price: 'Rs.40/-',
        description: 'Pooris made with love',
        image: 'https://media.istockphoto.com/id/952018646/photo/masala-aloo-sabzi-also-known-as-bombay-potatoes-served-with-fried-puri-or-poori-in-a-steel.jpg?s=612x612&w=0&k=20&c=FlFuUzVYSEwXWpcS3fbeb8MYraYDUwmkiUix1P7kGVE=',
        special: true,
        popular: true
    },
    {
        id: 2,
        name: 'Pulaav',
        category: 'breakfast',
        price: 'Rs.40/-',
        description: 'Rice mesmarized along with veggies',
        image: 'https://tiffinandteaofficial.com/wp-content/uploads/2023/01/Vegetarian-1.jpg'
    },
    {
        id: 8,
        name: 'Idli Vada',
        category: 'breakfast',
        price: 'Rs.40/-',
        description: 'Idli and the crispy vada dipped in sambar.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidV_cVPqtuQk_4GnGTafY4jgCGPkM2Sul7w&s'
    },
    {
        id: 11,
        name: 'Neer Dosa',
        category: 'breakfast',
        price: 'Rs.35/-',
        description: 'Dosa in rich with local taste',
        image: 'https://mariasmenu.com/wp-content/uploads/Neer-Dosa.png'
    },
    {
        id: 3,
        name: 'Chicken Biriryani',
        category: 'lunch',
        price: 'Rs.70/-',
        description: ' Chicken with mixed rice and vinaigrette.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1v1zWWYlG_yJA0P5TFI4WMwCgZq2y7heKXA&s',
        special: true
    },
    {
        id: 4,
        name: 'Ultimate Meal',
        category: 'lunch',
        price: 'Rs.60/-',
        description: 'Lunch King-Pin',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalNvxvzqy8ROrLMxwT4CVcC7V1uKRA-0ruQ&s',
        popular: true
    },
    {
        id: 13,
        name: 'Veg Biriyani',
        category: 'lunch',
        price: 'Rs.60/-',
        description: 'Veg Delight',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_K-fQi8HM7VDWibvpPBGpD_BweWi_geGQ7g&usqp=CAU',
    },
    {
        id: 5,
        name: 'Nerulli Bhaji(Onion Pakoda)',
        category: 'snacks',
        price: 'Rs.30/-',
        description: 'Crispy brown fries.',
        image: 'https://www.cookclickndevour.com/wp-content/uploads/2017/11/onion-pakoda-recipe-b.jpg',
        special: true
    },
    {
        id: 14,
        name: 'Goli bhaajhey',
        category: 'snacks',
        price: 'Rs.30/-',
        description: 'Crispy deep fried.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b6L8d3X1BCO1WQ52qDaOF81L3wIuaCUPhg&usqp=CAU'
    },
    {
        id: 11,
        name: 'Manglorean Buns',
        category: 'snacks',
        price: 'Rs.40/-',
        description: 'The Local Delight',
        image: 'https://www.cookwithkushi.com/wp-content/uploads/2022/07/IMG_2981kl.jpg'
    },
    {
        id: 6,
        name: 'Coffee',
        category: 'beverages',
        price: 'Rs.20/-',
        description: 'Hot brewed coffee.',
        image: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg'
    },
    {
        id: 7,
        name: 'Tea',
        category: 'beverages',
        price: 'Rs.15/-',
        description: 'Hot brewed tea.',
        image: 'https://thumbs.dreamstime.com/b/indian-chai-glass-cups-metal-kettle-other-masalas-to-make-tea-219339563.jpg',
        special: true
    },
    {
        id: 10,
        name: 'Milk',
        category: 'beverages',
        price: 'Rs.10/-',
        description: 'Warm Milk.',
        image: 'https://images1.wionews.com/images/wion/900x1600/2024/2/18/1708241066889_54d46f043c1e36d56f8c81fbc95b1793.jpeg',
    },
];

let cart = [];

function displayMenuItems(category) {
    const menuSection = document.querySelector(`[data-category="${category}"]`);
    const items = menuItems.filter(item => item.category === category);
    menuSection.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
            <form class="order-form" onsubmit="placeOrder(event, ${item.id})">
                <label for="quantity-${item.id}">Quantity:</label>
                <input type="number" id="quantity-${item.id}" name="quantity" min="1" value="1" required>
                <button type="submit">Order</button>
            </form>
        </div>
    `).join('');
}

function displaySpecialItems() {
    const specialItems = menuItems.filter(item => item.special);
    const specialSection = document.getElementById('special-items');
    specialSection.innerHTML = specialItems.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
            <form class="order-form" onsubmit="placeOrder(event, ${item.id})">
                <label for="quantity-${item.id}">Quantity:</label>
                <input type="number" id="quantity-${item.id}" name="quantity" min="1" value="1" required>
                <button type="submit">Order</button>
            </form>
        </div>
    `).join('');
}

function placeOrder(event, itemId) {
    event.preventDefault();
    const quantityInput = event.target.querySelector(`#quantity-${itemId}`);
    const quantity = parseInt(quantityInput.value);
    const item = menuItems.find(item => item.id === itemId);

    const cartItem = cart.find(cartItem => cartItem.id === itemId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}


function updateCart() {
    const cartCountElement = document.querySelector('.nav-item .nav-link');
    const cartTotalElement = document.querySelector('.nav-item .cart-total');
    
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        const price = parseInt(item.price.replace('Rs.', '').replace('/-', ''));
        totalPrice += price * item.quantity;
    });

    cartCountElement.innerHTML = `Cart (${totalItems})`;
    if (cartTotalElement) {
        cartTotalElement.innerHTML = `Total: Rs.${totalPrice}/-`;
    } else {
        const newTotalElement = document.createElement('span');
        newTotalElement.className = 'cart-total';
        newTotalElement.innerHTML = `Total: Rs.${totalPrice}/-`;
        cartCountElement.appendChild(newTotalElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ['breakfast', 'lunch', 'snacks', 'beverages'].forEach(category => displayMenuItems(category));
    displaySpecialItems();
    updateCart();
});

