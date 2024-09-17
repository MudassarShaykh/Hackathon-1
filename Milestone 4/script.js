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
    var resumeHtml = "\n    <h1 class=\"generated-heading\">Generated Resume</h1>\n    <div class=\"main-div\">\n        <div class=\"buttons-div\">\n          <button class=\"edit-btn\">Edit</button>\n          <button class=\"save-btn\" style=\"display:none;\">Save Changes</button>\n        </div>\n        <fieldset class=\"personal-div\">\n            <legend>Personal Information</legend>\n            <p class=\"generated-name\">Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone Number: ").concat(phone, "</p>\n        </fieldset>\n        <fieldset class=\"education-div\">\n            <legend>Education</legend>\n            <p class=\"generated-education\">").concat(education, "</p>\n        </fieldset>\n        <fieldset class=\"skills-div\">\n            <legend>Skills</legend>\n            <p class=\"generated-skills\">").concat(skills, "</p>\n        </fieldset>\n        <fieldset class=\"experience-div\">\n            <legend>Experience</legend>\n            <p class=\"generated-experience\">").concat(experience, "</p>\n        </fieldset>\n    </div>\n  ");
    if (generatedResume) {
        generatedResume.innerHTML = resumeHtml;
        // Attach event listeners for Edit and Save
        attachEventListeners();
    }
    var counter = 0;
    function attachEventListeners() {
        var editButton = document.querySelector(".edit-btn");
        var saveButton = document.querySelector(".save-btn");
        // Edit Mode Toggle
        editButton.addEventListener("click", function () {
            if (counter === 0) {
                var editResume = "\n      <h1 class=\"generated-heading\">Generated Resume</h1>\n      <div class=\"main-div\">\n        <div class=\"buttons-div\">\n          <button class=\"edit-btn\" style=\"display:none;\">Edit</button>\n          <button class=\"save-btn\">Save Changes</button>\n        </div>\n        <fieldset class=\"personal-div\">\n          <legend contenteditable=\"true\">Personal Information</legend>\n          <p class=\"generated-name edit-name\" contenteditable=\"true\">Name: ".concat(name, "</p>\n          <p class=\"generated-email edit-email\" contenteditable=\"true\">Email: ").concat(email, "</p>\n          <p class=\"generated-phone edit-phone\" contenteditable=\"true\">Phone Number: ").concat(phone, "</p>\n        </fieldset>\n        <fieldset class=\"education-div\">\n          <legend contenteditable=\"true\">Education</legend>\n          <p class=\"generated-education edit-education\" contenteditable=\"true\">").concat(education, "</p>\n        </fieldset>\n        <fieldset class=\"skills-div\">\n          <legend contenteditable=\"true\">Skills</legend>\n          <p class=\"generated-skills edit-skills\" contenteditable=\"true\">").concat(skills, "</p>\n        </fieldset>\n        <fieldset class=\"experience-div\">\n          <legend contenteditable=\"true\">Experience</legend>\n          <p class=\"generated-experience edit-experience\" contenteditable=\"true\">").concat(experience, "</p>\n        </fieldset>\n      </div>\n      ");
                counter++;
                console.log(counter);
                generatedResume.innerHTML = editResume;
                saveButton.style.display = "inline";
                // Re-attach event listener for Save button after editing
                attachSaveListener();
            }
            else if (counter >= 1) {
                var updatedName = generatedResume.querySelector(".edit-name").innerText;
                var updatedEmail = generatedResume.querySelector(".edit-email").innerText;
                var updatedPhone = generatedResume.querySelector(".edit-phone").innerText;
                var updatedEducation = generatedResume.querySelector(".edit-education").innerText;
                var updatedSkills = generatedResume.querySelector(".edit-skills").innerText;
                var updatedExperience = generatedResume.querySelector(".edit-experience").innerText;
                var editResume = "\n      <h1 class=\"generated-heading\">Generated Resume</h1>\n      <div class=\"main-div\">\n        <div class=\"buttons-div\">\n          <button class=\"edit-btn\" style=\"display:none;\">Edit</button>\n          <button class=\"save-btn\">Save Changes</button>\n        </div>\n        <fieldset class=\"personal-div\">\n          <legend contenteditable=\"true\">Personal Information</legend>\n          <p class=\"generated-name edit-name\" contenteditable=\"true\">".concat(updatedName, "</p>\n          <p class=\"generated-email edit-email\" contenteditable=\"true\">").concat(updatedEmail, "</p>\n          <p class=\"generated-phone edit-phone\" contenteditable=\"true\">").concat(updatedPhone, "</p>\n        </fieldset>\n        <fieldset class=\"education-div\">\n          <legend contenteditable=\"true\">Education</legend>\n          <p class=\"generated-education edit-education\" contenteditable=\"true\">").concat(updatedEducation, "</p>\n        </fieldset>\n        <fieldset class=\"skills-div\">\n          <legend contenteditable=\"true\">Skills</legend>\n          <p class=\"generated-skills edit-skills\" contenteditable=\"true\">").concat(updatedSkills, "</p>\n        </fieldset>\n        <fieldset class=\"experience-div\">\n          <legend contenteditable=\"true\">Experience</legend>\n          <p class=\"generated-experience edit-experience\" contenteditable=\"true\">").concat(updatedExperience, "</p>\n        </fieldset>\n      </div>\n      ");
                counter++;
                console.log("counter");
                generatedResume.innerHTML = editResume;
                saveButton.style.display = "inline";
                // Re-attach event listener for Save button after editing
                attachSaveListener();
            }
        });
    }
    function attachSaveListener() {
        var saveButton = document.querySelector(".save-btn");
        // Save Changes Mode
        saveButton.addEventListener("click", function () {
            var updatedName = generatedResume.querySelector(".edit-name").innerText;
            var updatedEmail = generatedResume.querySelector(".edit-email").innerText;
            var updatedPhone = generatedResume.querySelector(".edit-phone").innerText;
            var updatedEducation = generatedResume.querySelector(".edit-education").innerText;
            var updatedSkills = generatedResume.querySelector(".edit-skills").innerText;
            var updatedExperience = generatedResume.querySelector(".edit-experience").innerText;
            var updatedResume = "\n        <h1 class=\"generated-heading\">Generated Resume</h1>\n        <div class=\"main-div\">\n          <div class=\"buttons-div\">\n            <button class=\"edit-btn\">Edit</button>\n            <button class=\"save-btn\" style=\"display:none;\">Save Changes</button>\n          </div>\n          <fieldset class=\"personal-div\">\n            <legend>Personal Information</legend>\n            <p class=\"generated-name edit-name\">".concat(updatedName, "</p>\n            <p class=\"edit-email\">").concat(updatedEmail, "</p>\n            <p class=\"edit-phone\">").concat(updatedPhone, "</p>\n          </fieldset>\n          <fieldset class=\"education-div\">\n            <legend>Education</legend>\n            <p class=\"generated-education edit-education\">").concat(updatedEducation, "</p>\n          </fieldset>\n          <fieldset class=\"skills-div\">\n            <legend>Skills</legend>\n            <p class=\"generated-skills edit-skills\">").concat(updatedSkills, "</p>\n          </fieldset>\n          <fieldset class=\"experience-div\">\n            <legend>Experience</legend>\n            <p class=\"generated-experience edit-experience\">").concat(updatedExperience, "</p>\n          </fieldset>\n        </div>\n      ");
            generatedResume.innerHTML = updatedResume;
            attachEventListeners();
        });
    }
});
