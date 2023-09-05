// dateTimeFunctions.js
//  This one is for the year in the profile wrapper footer.
function getCurrentYear() {
    let currentYearElement = document.getElementById("currentYear");
    currentYearElement.textContent = new Date().getFullYear();
}
//  This one is for the year in the site footer.
function getcurrentYearSiteFooter() {
    let currentYearElement = document.getElementById("currentYearSiteFooter");
    currentYearElement.textContent = new Date().getFullYear();
}

//
// function getCurrentYearForSiteFooter() {
//     let currentYearElement = document.getElementById("currentYearSiteFooter");
//     currentYearElement.textContent = new Date().getFullYear();
// }