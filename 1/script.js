// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the contact form and the message display area
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Add an event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which would reload the page)
        event.preventDefault(); 
        
        // Clear any previous messages
        formMessage.textContent = '';
        formMessage.className = 'form-message'; // Reset classes

        // Get the values from the form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // --- Basic Validation Checks ---

        // 1. Check for empty fields
        if (name === '' || email === '' || message === '') {
            displayMessage('Please fill out all fields.', 'error');
            return; // Stop the function if validation fails
        }

        // 2. Simple email format check (checks for '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        // --- Validation Successful ---

        // In a real-world scenario, you would send this data to a server here.
        // Since this is a vanilla JS template, we'll just simulate a successful submission.
        
        displayMessage('Thank you! Your message has been sent (simulated).', 'success');
        
        // Clear the form fields after successful submission
        contactForm.reset();
    });
    
    // Function to display messages in the form message area
    function displayMessage(text, type) {
        formMessage.textContent = text;
        
        // Add the appropriate class for styling (defined in CSS)
        if (type === 'error') {
            formMessage.classList.add('error-message');
        } else if (type === 'success') {
            formMessage.classList.add('success-message');
        }
        
        // Simple function to hide the message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }

    /* BONUS: Smooth Scrolling Functionality for Navigation
        This makes the page scroll smoothly to the section anchors.
    */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});