/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/





const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", (banana) => {
        let buttonText = banana.target.innerText;

        if (buttonText === "=") {
            display.innerText = eval(display.innerText);
        } else if (buttonText === "C") {
            display.innerText = "";
        } else {
            display.innerText += buttonText;
        }
    });
});








