document.addEventListener("DOMContentLoaded", function() {
    const signinLink = document.getElementById('signin-link');
    const signinModal = document.getElementById('signin-modal');
    const closeBtn = document.getElementById('close');
    const signinButton = document.getElementById('signin-button');

    // Function to display the modal
    function displayModal() {
      signinModal.style.display = 'flex'; // Display the modal
    }

    signinLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      displayModal(); // Call the function to display the modal
    });

    signinButton.addEventListener('click', function(event) {
      displayModal(); // Call the function to display the modal
    });

    closeBtn.addEventListener('click', function() {
      signinModal.style.display = 'none'; // Hide the modal when close button is clicked
    });

    window.addEventListener('click', function(event) {
      if (event.target == signinModal) {
        signinModal.style.display = 'none'; // Hide the modal when clicked outside
      }
    });

    document.addEventListener("DOMContentLoaded", function() {
      var proceedBtn = document.getElementById("proceedBtn");

      proceedBtn.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve values from input fields if needed
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Redirect to a new page
        window.location.href = "index2.html"; // Change "new_page.html" to your desired page URL
      });
    });
  });






// Add an event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input elements and the proceed button
    var emailInput = document.getElementById('email');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var proceedBtn = document.getElementById('proceedBtn');

    // Define a function to validate email addresses
    function validateEmail(email) {
        // Regular expression for basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Define a function to validate usernames
    function validateUsername(username) {
        // Check if username already exists (dummy check)
        // You should replace this with your own logic to check uniqueness
        return true; // Assuming username is unique
    }

    // Define a function to validate passwords
    function validatePassword(password) {
        return password.length >= 8;
    }

    // Define a function to validate the entire form
    function validateForm() {
        // Get the values of the input elements and trim any whitespace
        var email = emailInput.value.trim();
        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();

        // Check if the email address is valid
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Check if the username is unique
        if (!validateUsername(username)) {
            alert('Username is already taken. Please choose a different one.');
            return false;
        }

        // Check if the password is at least 8 characters long
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long.');
            return false;
        }

        // If all validations pass, return true
        return true;
    }

    // Add an event listener for when the proceed button is clicked
    proceedBtn.addEventListener('click', function(event) {
        // Prevent the form from submitting automatically
        event.preventDefault();

        // Validate the form
        if (!validateForm()) {
            // If the form is not valid, do not submit it
            return;
        }

        // If the form is valid, submit it using AJAX or perform other actions here
        alert('Form submitted successfully!');
    });
});











