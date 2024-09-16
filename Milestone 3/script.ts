
const form = document.querySelector(".form-1") as HTMLFormElement;
const generatedResume = document.querySelector(".generated-resume") as HTMLDivElement;

form.addEventListener("submit" , (event : Event) => {
    event.preventDefault();

    const name =( document.querySelector("#name") as HTMLInputElement).value;
    const email =( document.querySelector("#email") as HTMLInputElement).value;
    const phone =( document.querySelector("#phone") as HTMLInputElement).value;
    const education =( document.querySelector("#education") as HTMLInputElement).value;
    const skills =( document.querySelector("#skills") as HTMLInputElement).value;
    const experience =( document.querySelector("#experience") as HTMLInputElement).value;
    
    const formDisplay = document.querySelector(".form-1") as HTMLFormElement
    formDisplay.style.display = "none"

    const resumeHtml:string = `
<h1 class="generated-heading">Generated Resume</h1>
<div class="main-div">
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
    `
    if(generatedResume){
        generatedResume.innerHTML = resumeHtml;
    }
})

