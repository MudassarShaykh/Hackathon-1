var form = document.querySelector(".form-1");
var generatedResume = document.querySelector(".generated-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var education = document.querySelector("#education").value;
    var skills = document.querySelector("#skills").value;
    var experience = document.querySelector("#experience").value;
    var formDisplay = document.querySelector(".form-1");
    formDisplay.style.display = "none";
    var resumeHtml = "\n<h1 class=\"generated-heading\">Generated Resume</h1>\n<div class=\"main-div\">\n <fieldset class=\"personal-div\">\n     <legend>Personal Information</legend>\n     <p class=\"generated-name\">Name: ".concat(name, "</p>\n     <p>Email: ").concat(email, "</p>\n     <p>Phone Number: ").concat(phone, "</p>\n </fieldset>\n <fieldset class=\"education-div\">\n     <legend>Education</legend>\n     <p class=\"generated-education\">").concat(education, "</p>\n </fieldset>\n <fieldset class=\"skills-div\">\n     <legend>Skills</legend>\n     <p class=\"generated-skills\">").concat(skills, "</p>\n </fieldset>\n <fieldset class=\"experience-div\">\n     <legend>Experience</legend>\n     <p class=\"generated-experience\">").concat(experience, "</p>\n </fieldset>\n</div>\n    ");
    if (generatedResume) {
        generatedResume.innerHTML = resumeHtml;
    }
});
