
let button = document.querySelector("#click-btn") as HTMLButtonElement ;
let buttonStyle = document.querySelector("#click-btn") as HTMLElement ;
let experience = document.querySelector(".work-experience") as HTMLElement ;
let click:string = "Show"
 button.addEventListener("click" , ()=> {
    alternativeClick()
 })

 function alternativeClick() {
    if(click === "Show"){
        click = "Hide"
        buttonStyle.textContent = "Hide Work Experience"
        experience.style.display = "block"
    }
    else if (click === "Hide") {
        click = "Show"
        buttonStyle.textContent = "Show Work Experience"
        experience.style.display = "none"
    }
 }