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


const login_button = document.getElementById('login_button');
const big1 = document.querySelector('.big1');
const big2 = document.querySelector('.big2');
const big3 = document.querySelector('.big3');
const forgot = document.getElementById('forgot');
const returnlogin = document.querySelector('.returnlogin');
const signup2 = document.querySelector('.signup2');


login_button.addEventListener('click', () => {
    big1.classList.add('hidden'); 
    big2.classList.remove('hidden');
});

forgot.addEventListener('click', () => {
    big2.classList.add('hidden');
    big3.classList.remove('hidden');
});

returnlogin.addEventListener('click', () => {
    big2.classList.remove('hidden');
    big3.classList.add('hidden');
})

signup2.addEventListener('click', () => {
    big1.classList.remove('hidden'); 
    big2.classList.add('hidden');
})

