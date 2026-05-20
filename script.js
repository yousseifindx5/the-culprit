const Start_Screen = document.querySelector(".start-screen");
const Setup_Screen = document.querySelector(".setup-screen");

const Back_Btn = document.getElementById("backBtn");
const Continue_Btn = document.getElementById("continueBtn");

const Start_Btn = document.getElementById("startBtn");
const Help_Btn = document.getElementById("helpBtn");

Start_Btn.addEventListener("click", function () {
    Start_Screen.style.display = "none";
    Setup_Screen.style.display = "block";
});

Help_Btn.addEventListener("click", function () {
    alert("instruction screen coming soon.");
});

Back_Btn.addEventListener("click", function () {
    Setup_Screen.style.display = "none";
    Start_Screen.style.display = "block";
});

Continue_Btn.addEventListener("click", function () {
    alert("player names screen is not added yet.");
});