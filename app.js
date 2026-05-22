let menuBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-xmark");
let menuContainer = document.querySelector(".menu-container");
let accordion = document.getElementsByClassName("content-box");

menuBtn.addEventListener("click", ()=> {
    menuContainer.classList.add("display");
    menuBtn.classList.add("menu-btn-disappear");
});

closeBtn.addEventListener("click", () => {
    menuContainer.classList.remove("display");
    menuBtn.classList.remove("menu-btn-disappear");
});

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    })
}

