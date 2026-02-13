document.addEventListener("DOMContentLoaded", function () {

    const screentxt = document.getElementById("screentxt");
    const buttons = document.querySelectorAll(".keybtn");
   

    let expression = "";



    buttons.forEach(button => {
        button.addEventListener("click", function () {

            let value = button.textContent.trim();

            
            if (value === "AC") {
                expression = "";
                screentxt.textContent = "";
                return;
            }

            
            if (value === "<-") {
                expression = expression.slice(0, -1);
                screentxt.textContent = expression;
                return;
            }

            
            if (value === "=") {
                try {
                    let result = eval(expression);
                    screentxt.textContent = result;
                    expression = result.toString();
                } catch {
                    screentxt.textContent = "Error";
                    expression = "";
                }
                return;
            }

           
            if (value === "x") value = "*";

          
            const lastChar = expression.slice(-1);
            const operators = ["+", "-", "*", "/", "%"];

            if (operators.includes(lastChar) && operators.includes(value)) {
                expression = expression.slice(0, -1);
            }

            expression += value;
            screentxt.textContent = expression;

        });

        
    });
    
    
});
