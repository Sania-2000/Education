 document.getElementById('signup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirm-password').value;
      var errorMessage = document.getElementById('error-message');
      
      if (name.trim() === '' || email.trim() === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
      }
      
      if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
      }

      // Perform further validation or submit the form
      
      // Reset error message
      errorMessage.textContent = '';
      
      // Form is valid, submit the form or perform further actions
      // Uncomment the line below to submit the form
      // document.getElementById('signup-form').submit();
    });

    // JavaScript code for handling social login buttons
    document.getElementById('google-btn').addEventListener('click', function() {
      // Handle Google signup
      console.log('Signup with Google');
    });

    document.getElementById('facebook-btn').addEventListener('click', function() {
      // Handle Facebook signup
      console.log('Signup with Facebook');
    });