//  Set initial count

let count = 0;

//  Select the value and the buttons

const value = document.querySelector("#counter-value");
const btns = document.querySelectorAll(".btn");


console.log(btns);

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;


        // console.log("Button pressed is " + styles);
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }
        if (count > 0) {
            //  Set the text color to green
            value.style.color = "green";
        } else if (count < 0) {
            //  Set the text color to red
            value.style.color = "red";
        } else if (count === 0) {
            //  Set the text color to black (or the default color that I select).
            value.style.color = "#011078";
        }
        value.textContent = count;
    });
});
