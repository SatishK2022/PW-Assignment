const inputBox = document.getElementById("inputBox");
const display = document.getElementById("display");

inputBox.addEventListener("keypress", (alpha) => {
    display.innerText = "You Entered " + alpha.key;
})