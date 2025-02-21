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