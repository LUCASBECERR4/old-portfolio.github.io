const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
const btnSwitch = document.querySelector("#switch");


btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("dark-mode", "true");
        }else{
            localStorage.setItem("dark-mode", "false");

    }
});

if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark-theme");
}else{
    document.body.classList.remove("dark-theme");
}
function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if(!navbar.classList.contains("open")){
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    }else{
        closeMenu();
    }
});

links.forEach(links => links.addEventListener("click", ()=> closeMenu() ));

window.addEventListener("scroll", () => {
    skillsEffect();
});

function checkScroll(el){
    let rect = el.getBoundingClientRect();
    
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect(){
    if(!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
  
window.onscroll = function(){
    if(document.documentElement.scrollTop > 800){
        document.querySelector(".go-top-container")
        .classList.add("show");
    }else{document.querySelector(".go-top-container")
    .classList.remove("show");

    }
}

document.querySelector(".go-top-container")
.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
