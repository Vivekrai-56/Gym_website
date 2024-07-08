// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const errorMessages = document.getElementById('errorMessages');
    const messageOverlay = document.getElementById('messageOverlay');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission
  
      // Clear any previous error messages
      errorMessages.innerHTML = '';
  
      // Collect form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
      // Validation checks
      let errors = [];
  
      if (name === '') {
        errors.push('Full Name is required.');
      }
  
      if (!validateEmail(email)) {
        errors.push('Invalid email address.');
      }
  
      if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
      }
  
      if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
      }
  
      // If there are errors, display them
      if (errors.length > 0) {
        displayErrors(errors);
      } else {
        // Show the success message
        messageOverlay.style.display = 'flex';  // Display the overlay
  
        // Redirect to the home page after a delay
        setTimeout(() => {
          window.location.replace('index.html');
        }, 2000);  // 2 seconds delay before redirecting
      }
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function displayErrors(errors) {
      errors.forEach(error => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.innerText = error;
        errorMessages.appendChild(errorElement);
      });
    }
  });