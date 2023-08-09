// dateTimeFunctions.js

function getCurrentYear() {
    const currentYearElement = document.getElementById("currentYear");
    currentYearElement.textContent = new Date().getFullYear();
}
