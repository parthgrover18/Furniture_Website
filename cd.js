function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
    return emailPattern.test(email);
}

// Get elements
const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribeButton');
const message = document.getElementById('message');

// Event listener for subscription
subscribeButton.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        // Email is valid
        message.textContent = "Your email has been subscribed!";
        message.className = "success";
        message.style.visibility = 'visible';
        emailInput.value='';
    } else {
        // Email is invalid
        message.textContent = "Incorrect email format. Please try again.";
        message.className = "error";
        message.style.visibility = 'visible';
        emailInput.value='';
    }
});

const cdItems = ["Ceramic Design Vase", "Glass Coffee Cup", "Grey Ceramic Plate", "Handmade Wooden Bowl", "Plain Design Cutlery", "Recycle Wood Stool"];

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(products => {
            let container = document.getElementById("best_seller_container");
            if (!container) {
                console.error("Element with ID 'best_seller_container' not found.");
                return;
            }

            let output = "";
            let filteredProducts = products.filter(product => cdItems.includes(product.name)).slice(0, 6); 
            console.log(filteredProducts)
            
            for (let i = 0; i < filteredProducts.length; i += 3) { 
                output += `<div class="best_seller_container">`; 

                for (let j = i; j < i + 3 && j < filteredProducts.length; j++) { 
                    let product = filteredProducts[j];
                    output += `
                        <div class="item_container">

                            <a href="description.html?name=${product.name}" onclick="setSelectedItem('${product.name}')">
                                <img class="best_seller_images" src="${product.image}" alt="${product.name}">
                                <hr>
                                <h3 class="item_name">${product.name}</h3>
                                <p class="item_price">
                                    ${product.originalPrice ? `<s>${product.originalPrice}</s> ${product.price}` : product.price}
                                </p>
                            </a>
                        </div>
                    `;
                }

                output += `</div>`; 
            }

            container.innerHTML = output;
        })
        .catch(error => console.error("Error loading data:", error));
});