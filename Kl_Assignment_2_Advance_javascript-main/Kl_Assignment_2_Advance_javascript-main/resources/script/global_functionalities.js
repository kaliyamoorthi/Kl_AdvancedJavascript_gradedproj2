
const alart_box = document.querySelector(".alert");
const alert_message = document.getElementById("alert_message");

function get_session_data() {
    return sessionStorage.getItem("is_logedin");
}

function Login_successful() {
    sessionStorage.setItem("is_logedin", 1);
    window.location.href = "./resume.html";
}

function Logout_user() {
    sessionStorage.setItem("is_logedin", 0);
    window.location.href = "./index.html"
}

function display_alert(message) {
    alert_message.textContent = message;
    alart_box.classList.remove("hide");
    setTimeout(function () {
        hide_alert();
    }, 5000);
}

function hide_alert() {
    alart_box.classList.add("hide");
}

const loginStatus = get_session_data()
if (window.location.pathname === "/resume.html") {
    if (loginStatus === null || loginStatus == 0) {
        window.location.href = "./index.html"
    }

}

alart_box.addEventListener("click", function () {
    alart_box.classList.add("hide")
});

if (window.location.pathname === "/index.html") {
    sessionStorage.setItem("is_logedin", 0);

}



export {display_alert, Logout_user, Login_successful, hide_alert}