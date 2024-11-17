var input = document.querySelector("#inputuser input"); 
var buttons = document.querySelectorAll(".number"); 
var currentInput = ""; 

buttons.forEach(function abc (button) {
    button.addEventListener("click", function abc() {
        var value = button.innerText; 
        if (value === 'C') {
            currentInput = "";
        }
        else if (value === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (type) {
                currentInput = "Error"; 
            }
        }
        else {
            currentInput += value;//currentinput store user value
        }

        input.value = currentInput;
    });
});
