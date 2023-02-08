
function swapCheckbox(checkbox){
    var othersCheckboxes = checkbox.parentNode.querySelectorAll("[type=checkbox]:not(#" + checkbox.id + ")");
    for (var item of othersCheckboxes){
        if(item.checked){
            item.checked = false;
        }
    }
}

function calculateOperation(){
    
    operands=lookForOperands();

    if(isNaN(operands[0]) || isNaN(operands[1])){
        console.log("Operands must be numbers")
        messageLabel("Los operandos deben ser numeros");
        return false;
    }

    operator = lookForOperator();

    if(!operator){
        console.log("Please select an operator")
        messageLabel("Seleccione un operador")
        return false;
    }

    console.log(operands[0] + operator.value + operands[1]);
    messageLabel(calculate(operands[0],operands[1], operator), true);

    return true;
}

function lookForOperands(){
    const operand1Element = document.getElementById("operand1");
    const operand2Element = document.getElementById("operand2");

    const operand1 = parseFloat(operand1Element.value);
    const operand2 = parseFloat(operand2Element.value);
    
    operands=[]
    operands.push(operand1)
    operands.push(operand2)

    return operands;
}

function lookForOperator(){
    var othersCheckboxes = document.querySelectorAll("[type=checkbox]");
    for (var item of othersCheckboxes){
        if(item.checked){
           return item;
        }
    }
    return false;
}

function messageLabel(message, result){
    labelError = document.getElementById("message")
    labelError.style.display="block";
    if(result){
        labelError.style.color="azure"
        labelError.innerHTML="El resultado es " + message;

    }else{
        labelError.style.color="red"
        labelError.innerHTML=message;
    }

}

function calculate(operand1, operand2, operator){
    switch(operator.value){
        case "+":
            return operand1+operand2;
        case "-":
            return operand1-operand2;
        case "/":
            return operand1/operand2;
        case "*":
            return operand1*operand2;

        default:
            console.log("Error in the calculate function")
    }

}