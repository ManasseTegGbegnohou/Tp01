// method to login to the to do list using password
function VerifyPswUserForLogin() {
    if (document.getElementById("username").value === localStorage.getItem("user") &&
        document.getElementById("password").value === localStorage.getItem("psw")) {

        document.location = 'toDoList.html';

    } else {
        alert("WRONG USERNAME OR PASSWORD!");
    }

}