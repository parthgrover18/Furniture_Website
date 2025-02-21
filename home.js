function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email);
}



const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribeButton');
const message = document.getElementById('message');

subscribeButton.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        message.textContent = "Your email has been subscribed!";
        message.className = "success";
        message.style.visibility = 'visible';
        emailInput.value='';
    } else {
        message.textContent = "Incorrect email format. Please try again.";
        message.className = "error";
        message.style.visibility = 'visible';
        emailInput.value='';
    }
});


const viewMoreBtn = document.getElementById('view_less');

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
            for (let i = 0; i < products.length; i += 4) {
                output += `<div class="best_seller_container">`;

                for (let j = i; j < i + 4 && j < products.length; j++) {
                    let product = products[j];

                    
                    if (i < 4) {
                        output += `
                        <div class="item_container">
                            <a href="description.html?name=${product.name}" onclick="setSelectedItem('${product.name}')">
                                <img class="best_seller_images" src="${product.image}" alt="${product.name}">
                                <hr>
                                <h3 class="item_name">${product.name}</h3>
                                <p class="item_price">${product.originalPrice ? `<s>${product.originalPrice}</s> ${product.price}` : product.price}</p>
                            </a>
                        </div>
                    `;
                    } else {
                        
                        output += `
                        <div class="item_container hidden">
                            <a href="description.html?name=${product.name}" onclick="setSelectedItem('${product.name}')">
                                <img class="best_seller_images" src="${product.image}" alt="${product.name}">
                                <hr>
                                <h3 class="item_name">${product.name}</h3>
                                <p class="item_price">${product.originalPrice ? `<s>${product.originalPrice}</s> ${product.price}` : product.price}</p>
                            </a>
                        </div>
                    `;
                    }
                }

                output += `</div>`;
            }

            container.innerHTML = output;

            
            const hiddenItems = document.querySelectorAll('.hidden');

            
            viewMoreBtn.addEventListener('click', () => {
                hiddenItems.forEach((item) => {
                    item.classList.toggle('hidden');
                });

                
                if (viewMoreBtn.textContent === 'View More') {
                    viewMoreBtn.textContent = 'View Less';
                } else {
                    viewMoreBtn.textContent = 'View More';
                }
            });
        })
        .catch(error => console.error("Error loading data:", error));
        
        
    
});