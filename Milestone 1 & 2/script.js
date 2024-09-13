var button = document.querySelector("#click-btn");
var buttonStyle = document.querySelector("#click-btn");
var experience = document.querySelector(".work-experience");
var click = "Show";
button.addEventListener("click", function () {
    alternativeClick();
});
function alternativeClick() {
    if (click === "Show") {
        click = "Hide";
        buttonStyle.textContent = "Hide Work Experience";
        experience.style.display = "block";
    }
    else if (click === "Hide") {
        click = "Show";
        buttonStyle.textContent = "Show Work Experience";
        experience.style.display = "none";
    }
}
