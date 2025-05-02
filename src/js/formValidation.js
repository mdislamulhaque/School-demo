
  document.getElementById("form-validation").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission

    // Get input elements
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    // Get error message elements (nextElementSibling = <p>)
    const usernameError = username.nextElementSibling;
    const emailError = email.nextElementSibling;
    const passwordError = password.nextElementSibling;
    const password2Error = password2.nextElementSibling;

    let isValid = true;

    // Username Validation
    if (username.value.trim().length < 3) {
      username.classList.add("border-red-500");
      usernameError.textContent = "Username must be at least 3 characters";
      usernameError.classList.remove("hidden");
      isValid = false;
    } else {
      username.classList.remove("border-red-500");
      usernameError.classList.add("hidden");
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("border-red-500");
      emailError.textContent = "Email is not valid";
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      email.classList.remove("border-red-500");
      emailError.classList.add("hidden");
    }

    // Password Validation
    if (password.value.length < 6) {
      password.classList.add("border-red-500");
      passwordError.textContent = "Password must be at least 6 characters";
      passwordError.classList.remove("hidden");
      isValid = false;
    } else {
      password.classList.remove("border-red-500");
      passwordError.classList.add("hidden");
    }

    // Confirm Password Validation
    if (password2.value !== password.value || password2.value === "") {
      password2.classList.add("border-red-500");
      password2Error.textContent = "Passwords do not match";
      password2Error.classList.remove("hidden");
      isValid = false;
    } else {
      password2.classList.remove("border-red-500");
      password2Error.classList.add("hidden");
    }

    // If all inputs are valid
    if (isValid) {
      alert("Form submitted successfully!");
      // You can submit the form using form.submit() or handle further logic here
      this.reset(); // clear form
    }
  });

