document.getElementById('order-button').addEventListener('click', () => {
    const selectedItems = Array.from(document.querySelectorAll('#food-selection input:checked')).map(cb => ({
        value: cb.value,
        name: cb.nextElementSibling.textContent.trim()
    }));
    
    if (selectedItems.length === 0) {
        showAlert('Please select at least one food item.');
        return;
    }
    
    const orderId = `BK${Math.floor(Math.random() * 9000 + 1000)}`;
    document.querySelector('.order-number').textContent = `Order #${orderId}`;

    const orderResult = document.getElementById('order-result');
    const statusContent = orderResult.querySelector('.status-content');
    
    // Show processing message
    orderResult.style.display = 'block';
    statusContent.innerHTML = `
        <div class="processing-animation">
            <i class="fas fa-hamburger fa-spin"></i>
            <h3>Preparing Your Order</h3>
            <p>Your delicious meal is being prepared with care...</p>
        </div>
    `;
    
    // Simulate order processing
    const randomDelay = Math.floor(Math.random() * 4000) + 2000;
    
    setTimeout(() => {
        // Create HTML for each ordered item
        const itemsHTML = selectedItems.map(item => `
            <div class="ordered-item">
                <div class="item-image">
                    <img src="assets/${item.value.toLowerCase()}.png" alt="${item.name}" 
                         onerror="this.src='assets/food.png'">
                </div>
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>${getItemPrice(item.value)}</p>
                </div>
            </div>
        `).join('');
        
        statusContent.innerHTML = `
            <div class="order-complete">
                <i class="fas fa-check-circle"></i>
                <h3>Order Complete!</h3>
                <p>Your order #${orderId} is ready.</p>
                
                <div class="order-summary">
                    <h4>Your Order:</h4>
                    ${itemsHTML}
                    
                    <div class="order-total">
                        <p>Total: ₹${calculateTotal(selectedItems)}</p>
                    </div>
                    
                    <p class="enjoy-message">Enjoy your meal! <i class="fas fa-smile"></i></p>
                </div>
            </div>
        `;
        
        // Add celebration effect
        orderResult.classList.add('celebrate');
    }, randomDelay);
});

// Helper function to get item price
function getItemPrice(itemValue) {
    const prices = {
        // Burgers
        'doublecheburger': '₹70',
        'impsble': '₹70',
        'Burger': '₹70',
        'whoper': '₹70',
        
        // Drinks
        'frozen': '₹50',
        'soft': '₹50',
        'icetea': '₹50',
        'coffee': '₹50',
        
        // Sides
        'mzstick': '₹100',
        'Fries': '₹100',
        'oring': '₹100',
        'hsbrow': '₹100',
        
        // Desserts
        'hp': '₹80',
        'softscurve': '₹80',
        'sundae': '₹80',
        'chltecc': '₹80'
    };
    
    return prices[itemValue] || '₹0';
}

// Calculate total price
function calculateTotal(items) {
    return items.reduce((total, item) => {
        const price = getItemPrice(item.value).replace('₹', '');
        return total + parseInt(price);
    }, 0);
}

// Custom alert function
function showAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'custom-alert';
    alert.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}