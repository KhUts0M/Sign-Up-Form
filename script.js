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

// Function to switch to signup and clear form inputs
function switchToSignup() {
  console.log("Switching to signup");
  // Remove "is-active" class from login switcher and form
  document.querySelector(".switcher-login").classList.remove("is-active");
  document.querySelector(".form-login").classList.remove("is-active");

  // Add "is-active" class to signup switcher and form
  document.querySelector(".switcher-signup").classList.add("is-active");
  document.querySelector(".form-signup").classList.add("is-active");

  // Clear form inputs
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}

// Function to switch to login and clear form inputs
function switchToLogin() {
  console.log("Switching to login");
  // Remove "is-active" class from signup switcher and form
  document.querySelector(".switcher-signup").classList.remove("is-active");
  document.querySelector(".form-signup").classList.remove("is-active");

  // Add "is-active" class to login switcher and form
  document.querySelector(".switcher-login").classList.add("is-active");
  document.querySelector(".form-login").classList.add("is-active");

  // Clear form inputs
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-password-confirm").value = "";
}
