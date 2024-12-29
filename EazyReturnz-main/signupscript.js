document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // You can add your signup logic here, such as sending data to a server
    
    // Display message
    var message = document.getElementById('message');
    message.textContent = 'Signup successful!';
  });
  