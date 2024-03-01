const registerBtn = document.getElementById("signUpBtn");
const goToLoginBtn = document.getElementById("loginBtn");
const user = document.getElementById("username");
const psw = document.getElementById("password");

// registerBtn.addEventListener("click", register);
// goToLoginBtn.addEventListener("click", goToLogin);

// method to add username and password to local storage
function register() {
    localStorage.setItem("user", user.value)
    localStorage.setItem("psw", psw.value)
    alert("YOU HAVE BEEN REGISTERED !")
}

// method to redirect to login page
function goToLogin() {
    document.location = 'login.html';
}

//how to use local storage key and value from another html not in the same domain

