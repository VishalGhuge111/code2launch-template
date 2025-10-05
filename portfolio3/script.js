/* ===========================================
   Beginner Portfolio - JavaScript File
   Author: [Your Name]
   Purpose: Add interactivity and form validation
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ---------------- Set Current Year in Footer ----------------
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear(); // Shows current year automatically

    // ---------------- Contact Form Validation ----------------
    const contactForm = document.getElementById('contactForm');
    const validationMessage = document.getElementById('formValidationMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get values from form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        validationMessage.textContent = ''; // Clear previous messages
        let isValid = true;

        // Check if all fields are filled
        if (name === '' || email === '' || message === '') {
            validationMessage.textContent = 'Error: All fields are required.';
            isValid = false;
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isValid && !emailRegex.test(email)) {
            validationMessage.textContent = 'Error: Please enter a valid email address.';
            isValid = false;
        }

        // Show success or error
        if (isValid) {
            validationMessage.textContent = 'Message sent successfully! (Note: This is a placeholder submission).';
            validationMessage.style.color = 'green';
            contactForm.reset(); // Clear the form
        } else {
            validationMessage.style.color = 'red';
        }
    });

    // ---------------- Smooth Scrolling for Navigation ----------------
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth' // Smooth scroll
            });
        });
    });

});
