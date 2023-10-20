//  This script will be used to determine the Viewport of a web application.
const vpWidthContainer = document.getElementById("vpWidth");
const vpHeightContainer = document.getElementById("vpHeight");
const width = window.innerWidth;
const height = window.innerHeight;


vpWidthContainer.textContent = width.toString();
vpHeightContainer.textContent = height.toString();


window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`The viewport's width is ${width} and the height is ${height}.`);
    vpWidthContainer.textContent = width.toString();
    vpHeightContainer.textContent = height.toString();

});