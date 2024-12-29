document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "yourusername" && password === "yourpassword") {
    alert("Login successful!");
    // Redirect to another page or perform further actions upon successful login
  } else {
    document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
  }
});
