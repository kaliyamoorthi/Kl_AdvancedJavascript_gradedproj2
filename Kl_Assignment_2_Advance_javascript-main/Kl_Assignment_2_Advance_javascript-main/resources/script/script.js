import {get_data} from "./data.js";
import {Logout_user, display_alert, hide_alert} from "./global_functionalities.js";

const search_input = document.getElementById("search_input");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const search = document.getElementById("search");
const reset = document.getElementById("reset");
const logout = document.getElementById("logout");
let current = 0;
let data = get_data();

function display_data({basics, skills, work, Internship, projects, education, achievements, interests}) {
    document.getElementById("name").textContent = basics.name;
    document.getElementById("role").textContent = basics.AppliedFor;
    document.getElementById("email").textContent = basics.email;
    document.getElementById("phone_number").textContent = basics.phone;
    document.getElementById("linkedin").href = basics.profiles.url;
    document.getElementById("skill_name").textContent = skills.name;
    document.getElementById("skill_level").textContent = skills.level;
    document.getElementById("skills").textContent = skills.keywords.toString().replaceAll(",", ", ");
    document.getElementById("hobbies").textContent = interests.hobbies.toString().replaceAll(",", ", ");
    document.getElementById("work_company_name").textContent = work["Company Name"];
    document.getElementById("work_position").textContent = work.Position;
    document.getElementById("working_start_date").textContent = work["Start Date"];
    document.getElementById("working_end_date").textContent = work["End Date"];
    document.getElementById("work_summary").textContent = work.Summary;
    document.getElementById("project_name").textContent = projects.name
    document.getElementById("project_description").textContent = projects.description
    document.getElementById("ug").textContent = `${education["UG"].course} From ${education["UG"].institute}, ${education["UG"]["Start Date"]}, ${education["UG"]["End Date"]}`;
    document.getElementById("ug_gpa").textContent = education["UG"].cgpa;
    document.getElementById("senior_secondary").textContent = `From ${education["Senior Secondary"].institute}.`
    document.getElementById("senior_secondary_gpa").textContent = education["Senior Secondary"].cgpa
    document.getElementById("high_school").textContent = `From ${education["High School"].institute}.`
    document.getElementById("high_school_gpa").textContent = education["High School"].cgpa
    document.getElementById("internship_company_name").textContent = Internship["Company Name"];
    document.getElementById("internship_position").textContent = Internship.Position;
    document.getElementById("internship_start_date").textContent = Internship["Start Date"];
    document.getElementById("internship_end_date").textContent = Internship["End Date"];
    document.getElementById("internship_summary").textContent = Internship.Summary;
    document.getElementById("achievements_summary").textContent = achievements.Summary.toString().replaceAll(",", ", ");
}

function buttons_check() {
    if (current === 0) {
        previous.classList.add('hide')
    }
    if (current > 0) {
        previous.classList.remove('hide')
    }
    if (current < data.length - 1) {
        next.classList.remove('hide')
    }
    if (current === data.length - 1) {
        next.classList.add('hide')
    }

}

function load_content() {
    buttons_check();
    display_data(data[current]);
}

function go_next() {
    if (current < data.length - 1) {
        current++;
        load_content()
    }
}

function go_previous() {
    if (current > 0) {
        current--;
        load_content()
    }
}

function log_out() {
    search_input.value = "";
    Logout_user();
}

function process_search() {
    let result_data = get_data(search_input.value)
    if (result_data.length !== 0) {
        hide_alert();
        data = result_data;
        current = 0;
        search.classList.add('hide')
        reset.classList.remove('hide')
        load_content();
    }
    else {
        display_alert("No Data found for this keyword.");
    }
}


next.addEventListener("click", go_next);

previous.addEventListener("click", go_previous);

search.addEventListener("click", function () {
    process_search()
});

reset.addEventListener("click", function () {
    data = get_data()
    current = 0;
    search.classList.remove('hide')
    reset.classList.add('hide')
    search_input.value = ""
    load_content();
})

logout.addEventListener("click", log_out)

search_input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        process_search();
    }
});

hide_alert();
load_content();
