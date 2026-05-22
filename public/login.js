const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (username.length < 3) {
      errors.push("Username must be at least 3 characters");
    }

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    alert("Login successful");
  });
}
