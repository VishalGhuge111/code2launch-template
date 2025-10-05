// ===============================
// SIMPLE CONTACT FORM SCRIPT
// ===============================

// This code runs only after the whole page is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get form and message area elements
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page from refreshing

        // Get input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation: check empty fields
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            return;
        }

        // Check if email looks valid
        if (!email.includes('@') || !email.includes('.')) {
            formMessage.textContent = 'Please enter a valid email.';
            formMessage.style.color = 'red';
            return;
        }

        // If all ok, show success message
        formMessage.textContent = 'Thank you for your message! (Form not connected yet)';
        formMessage.style.color = 'green';

        // For a real site, you’d send data to a server here
    });
});
