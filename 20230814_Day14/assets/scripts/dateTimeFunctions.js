// dateTimeFunctions.js

function getCurrentYear() {
    const currentYearElement = document.getElementById("currentYear");
    currentYearElement.textContent = new Date().getFullYear();
}

function getCurrentYearForSiteFooter() {
    const currentYearElement = document.getElementById("currentYearSiteFooter");
    currentYearElement.textContent = new Date().getFullYear();
}