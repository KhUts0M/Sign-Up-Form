const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Switcher clicked");
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

// Function to switch to login and clear form inputs
function switchToLogin() {
  document.querySelector(".switcher-signup").classList.remove("is-active");
  document.querySelector(".form-signup").classList.remove("is-active");
  document.querySelector(".switcher-login").classList.add("is-active");
  document.querySelector(".form-login").classList.add("is-active");

  // Clear form inputs
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-password-confirm").value = "";
}

// Function to switch to signup and clear form inputs
function switchToSignup() {
  document.querySelector(".switcher-login").classList.remove("is-active");
  document.querySelector(".form-login").classList.remove("is-active");
  document.querySelector(".switcher-signup").classList.add("is-active");
  document.querySelector(".form-signup").classList.add("is-active");

  // Clear form inputs
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}

// Function to handle login form submission
function handleLoginSubmit(form) {
  // Your login form handling logic here
  // ...

  // Clear form inputs
  form.reset();

  // Prevent the default form submission
  return false;
}

// Function to handle signup form submission
function handleSignupSubmit(form) {
  // Your signup form handling logic here
  // ...

  // Clear form inputs
  form.reset();

  // Prevent the default form submission
  return false;
}
