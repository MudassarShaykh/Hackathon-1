const form = document.querySelector(".form-1") as HTMLFormElement;
const generatedResume = document.querySelector(".generated-resume") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.querySelector("#name") as HTMLInputElement).value;
  const email = (document.querySelector("#email") as HTMLInputElement).value;
  const phone = (document.querySelector("#phone") as HTMLInputElement).value;
  const education = (document.querySelector("#education") as HTMLInputElement).value;
  const skills = (document.querySelector("#skills") as HTMLInputElement).value;
  const experience = (document.querySelector("#experience") as HTMLInputElement).value;

  const formDisplay = document.querySelector(".form-1") as HTMLFormElement;
  formDisplay.style.display = "none";

  let resumeHtml: string = `
    <h1 class="generated-heading">Generated Resume</h1>
    <div class="main-div">
        <div class="buttons-div">
          <button class="edit-btn">Edit</button>
          <button class="save-btn" style="display:none;">Save Changes</button>
        </div>
        <fieldset class="personal-div">
            <legend>Personal Information</legend>
            <p class="generated-name">Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phone}</p>
        </fieldset>
        <fieldset class="education-div">
            <legend>Education</legend>
            <p class="generated-education">${education}</p>
        </fieldset>
        <fieldset class="skills-div">
            <legend>Skills</legend>
            <p class="generated-skills">${skills}</p>
        </fieldset>
        <fieldset class="experience-div">
            <legend>Experience</legend>
            <p class="generated-experience">${experience}</p>
        </fieldset>
    </div>
  `;

  if (generatedResume) {
    generatedResume.innerHTML = resumeHtml;
    
    // Attach event listeners for Edit and Save
    attachEventListeners();
  }
  let counter = 0;
  function attachEventListeners() {
    const editButton = document.querySelector(".edit-btn") as HTMLButtonElement;
    const saveButton = document.querySelector(".save-btn") as HTMLButtonElement;

    // Edit Mode Toggle
    editButton.addEventListener("click", () => {

      if (counter === 0) {
      const editResume = `
      <h1 class="generated-heading">Generated Resume</h1>
      <div class="main-div">
        <div class="buttons-div">
          <button class="edit-btn" style="display:none;">Edit</button>
          <button class="save-btn">Save Changes</button>
        </div>
        <fieldset class="personal-div">
          <legend contenteditable="true">Personal Information</legend>
          <p class="generated-name edit-name" contenteditable="true">Name: ${name}</p>
          <p class="generated-email edit-email" contenteditable="true">Email: ${email}</p>
          <p class="generated-phone edit-phone" contenteditable="true">Phone Number: ${phone}</p>
        </fieldset>
        <fieldset class="education-div">
          <legend contenteditable="true">Education</legend>
          <p class="generated-education edit-education" contenteditable="true">${education}</p>
        </fieldset>
        <fieldset class="skills-div">
          <legend contenteditable="true">Skills</legend>
          <p class="generated-skills edit-skills" contenteditable="true">${skills}</p>
        </fieldset>
        <fieldset class="experience-div">
          <legend contenteditable="true">Experience</legend>
          <p class="generated-experience edit-experience" contenteditable="true">${experience}</p>
        </fieldset>
      </div>
      `;
      counter++;
      generatedResume.innerHTML = editResume;
      saveButton.style.display = "inline";

      // Re-attach event listener for Save button after editing
      attachSaveListener();
      }
      else if (counter >= 1) {
        const updatedName = (generatedResume.querySelector(".edit-name") as HTMLParagraphElement).innerText;
        const updatedEmail = (generatedResume.querySelector(".edit-email") as HTMLParagraphElement).innerText;
        const updatedPhone = (generatedResume.querySelector(".edit-phone") as HTMLParagraphElement).innerText;
        const updatedEducation = (generatedResume.querySelector(".edit-education") as HTMLParagraphElement).innerText;
        const updatedSkills = (generatedResume.querySelector(".edit-skills") as HTMLParagraphElement).innerText;
        const updatedExperience = (generatedResume.querySelector(".edit-experience") as HTMLParagraphElement).innerText;

        const editResume = `
      <h1 class="generated-heading">Generated Resume</h1>
      <div class="main-div">
        <div class="buttons-div">
          <button class="edit-btn" style="display:none;">Edit</button>
          <button class="save-btn">Save Changes</button>
        </div>
        <fieldset class="personal-div">
          <legend contenteditable="true">Personal Information</legend>
          <p class="generated-name edit-name" contenteditable="true">${updatedName}</p>
          <p class="generated-email edit-email" contenteditable="true">${updatedEmail}</p>
          <p class="generated-phone edit-phone" contenteditable="true">${updatedPhone}</p>
        </fieldset>
        <fieldset class="education-div">
          <legend contenteditable="true">Education</legend>
          <p class="generated-education edit-education" contenteditable="true">${updatedEducation}</p>
        </fieldset>
        <fieldset class="skills-div">
          <legend contenteditable="true">Skills</legend>
          <p class="generated-skills edit-skills" contenteditable="true">${updatedSkills}</p>
        </fieldset>
        <fieldset class="experience-div">
          <legend contenteditable="true">Experience</legend>
          <p class="generated-experience edit-experience" contenteditable="true">${updatedExperience}</p>
        </fieldset>
      </div>
      `;
      counter++;
      generatedResume.innerHTML = editResume;
      saveButton.style.display = "inline";

      // Re-attach event listener for Save button after editing
      attachSaveListener();
      }
    });
  }

  function attachSaveListener() {
    const saveButton = document.querySelector(".save-btn") as HTMLButtonElement;

    // Save Changes Mode
    saveButton.addEventListener("click", () => {
      const updatedName = (generatedResume.querySelector(".edit-name") as HTMLParagraphElement).innerText;
      const updatedEmail = (generatedResume.querySelector(".edit-email") as HTMLParagraphElement).innerText;
      const updatedPhone = (generatedResume.querySelector(".edit-phone") as HTMLParagraphElement).innerText;
      const updatedEducation = (generatedResume.querySelector(".edit-education") as HTMLParagraphElement).innerText;
      const updatedSkills = (generatedResume.querySelector(".edit-skills") as HTMLParagraphElement).innerText;
      const updatedExperience = (generatedResume.querySelector(".edit-experience") as HTMLParagraphElement).innerText;

      let updatedResume = `
        <h1 class="generated-heading">Generated Resume</h1>
        <div class="main-div">
          <div class="buttons-div">
            <button class="edit-btn">Edit</button>
            <button class="save-btn" style="display:none;">Save Changes</button>
          </div>
          <fieldset class="personal-div">
            <legend>Personal Information</legend>
            <p class="generated-name edit-name">${updatedName}</p>
            <p class="edit-email">${updatedEmail}</p>
            <p class="edit-phone">${updatedPhone}</p>
          </fieldset>
          <fieldset class="education-div">
            <legend>Education</legend>
            <p class="generated-education edit-education">${updatedEducation}</p>
          </fieldset>
          <fieldset class="skills-div">
            <legend>Skills</legend>
            <p class="generated-skills edit-skills">${updatedSkills}</p>
          </fieldset>
          <fieldset class="experience-div">
            <legend>Experience</legend>
            <p class="generated-experience edit-experience">${updatedExperience}</p>
          </fieldset>
        </div>
      `;
      
      generatedResume.innerHTML = updatedResume;

      attachEventListeners();
    });
  }
});
