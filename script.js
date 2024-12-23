let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav2");
let cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
   nav.style.transform = "translateX(0%)"; 
});

cross.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)"; 
});
