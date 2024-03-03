// method to go To do list
function goToToDoList() {
    document.location = 'toDoList.html';
}

// method to verify psw and user
function VerifyPswUserForLogin() {
    if (document.getElementById("username").value === localStorage.getItem("user") &&
        document.getElementById("password").value === localStorage.getItem("psw")) {

        //document.location = 'toDoList.html';
        goToToDoList();


    } else {
        alert("WRONG USERNAME OR PASSWORD!");
    }

}