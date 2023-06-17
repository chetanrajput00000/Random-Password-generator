let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

sliderValue.textContent = inputSlider.value - 1;
inputSlider.addEventListener("input", function () {
    sliderValue.textContent = inputSlider.value - 1;
});

let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let Btn = document.getElementById("Btn");
let copyIcon = document.getElementById("copyIcon")
Btn.addEventListener("click", function () {
    passBox.value = generatePassword();
})

let lowerC = "abcdefghijklmnopqrstuvwxyz"
let upperC = "ABCEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers = "0123456789"
let allSymbols = "~!@#$%^&*"

function generatePassword() {
    let genPass = "";
    let allvalues = "";

    allvalues += lowercase.checked ? lowerC : "";
    allvalues += uppercase.checked ? upperC : "";
    allvalues += numbers.checked ? allNumbers : "";
    allvalues += symbols.checked ? allSymbols : "";

    let i = 1;
    while (i < inputSlider.value) {
        genPass += allvalues.charAt(Math.floor(Math.random() * allvalues.length - 1));
        i++;
    }
    return genPass
}

copyIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(passBox.value)
});

copyIcon.addEventListener("click", function () {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy"
        }, 3000);
        copyIcon.title = "password Copied!";

    } else {
        alert("Nothing to copy")
    }
});

