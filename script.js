function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  alert(`Sign up successful!\nUsername: ${username}\nPassword: ${password}`);
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
}
