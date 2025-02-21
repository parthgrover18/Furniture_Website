function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\+?[1-9]\d{1,14}$/; 
    return phonePattern.test(phone);
}

document.querySelector('.send_message').addEventListener('click', function () {
    
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="number"]');
    const messageInput = document.querySelector('textarea');
    const hiddenMessage = document.querySelector('.hidden_message');
    
    document.querySelectorAll('input, textarea').forEach(field => {
        field.style.borderColor = ''; 
    });

    let isValid = true;
    
    if (nameInput.value.trim() === '') {
        nameInput.style.borderColor = 'red';
        isValid = false;
    }
    
    if (!validateEmail(emailInput.value.trim())) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    }

    if (!validatePhone(phoneInput.value.trim())) {
        phoneInput.style.borderColor = 'red';
        isValid = false;
    }
    
    if (messageInput.value.trim() === '') {
        messageInput.style.borderColor = 'red';
        isValid = false;
    }
    
    if (isValid) {
        hiddenMessage.style.display = 'block'; 
        hiddenMessage.style.color = 'gray'
        
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        messageInput.value = '';
    } else {
        hiddenMessage.style.display = 'none'; 
    }
});

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