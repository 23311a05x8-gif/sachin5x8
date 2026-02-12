let cart = [];

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Add button event listeners
    const buttons = document.querySelectorAll(".addBtn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price);
            addToCart(name, price);
        });
    });
});

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function updateQuantity(name, quantity) {
    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - Rs.${item.price} 
            x <input type="number" min="0" value="${item.quantity}">
            = Rs.${item.price * item.quantity}
            <button class="removeBtn">Remove</button>
        `;

        // Quantity change
        li.querySelector("input").addEventListener("change", function () {
            updateQuantity(item.name, this.value);
        });

        // Remove button
        li.querySelector(".removeBtn").addEventListener("click", function () {
            removeFromCart(item.name);
        });

        cartItems.appendChild(li);
    });

    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    document.getElementById("totalPrice").innerText =
        "Total Price: Rs." + total;
}
