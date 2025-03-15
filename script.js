// Function to navigate to the artists page
function exploreArtists() {
    window.location.href = "artists.html";
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully! We will get back to you soon.");
        form.reset();
    });
});

let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "<h3>Shopping Cart</h3>";
    cart.forEach((product, index) => {
        cartDiv.innerHTML += `<p>${product.item} - KSh ${product.price} 
        <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
