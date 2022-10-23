import {Login_successful, display_alert} from "./global_functionalities.js";

const admin_username = "admin"
const admin_password = "admin"
const usernmae = document.getElementById("username_input");
const password = document.getElementById("password_input");
const login = document.getElementById("login");
const unlock = document.querySelector(".unlock")
const lock = document.querySelector(".lock")

function validate_user() {
    if (usernmae.value === admin_username && password.value === admin_password) {
        lock.classList.add("hide")
        unlock.classList.remove("hide")
        setTimeout(function () {
            Login_successful();
            usernmae.value = "";
            password.value = "";
            window.location.href = "./resume.html";
        }, 800);


    }
    else {
        display_alert("Invalid username & password");
    }
}

login.addEventListener("click", validate_user)
