document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!subjectInput.value.trim()) {
            subjectError.textContent = 'Please enter the subject of your inquiry.';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }

        if (!messageInput.value.trim()) {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            console.log('Form submitted successfully!');
            formSuccess.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 3000);
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});