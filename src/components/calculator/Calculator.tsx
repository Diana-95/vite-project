
import { useState } from "react";
import Operation from "./Operation.tsx";

function Calculator () {

    const [leftNumber, setLeftNumber] = useState<number>();
    const [rightNumber, setRightNumber] = useState<number>();
    const [operator, setOperator] = useState<string>("+");

    let result = 0;
    function setResult(x: number) {
        result = x;
    }

    function performOperation () {
        if(leftNumber && rightNumber) {
            console.log(operator);
            switch (operator){
                case "+" :
                    return rightNumber + leftNumber;

                case "-" :
                    return leftNumber - rightNumber;
                    
                case "*" :
                    return rightNumber * leftNumber;
                case "/" :
                    return leftNumber / rightNumber;
            }
            
        }
        return result;
    }
    return (
        <>
            <h2> Calculator task </h2>

            <Operation 
                rightNumber = { setRightNumber} 
                leftNumber = {setLeftNumber} 
                operator = {setOperator}
            />

            <div> Result: {performOperation()} </div> 
        </>
    )
}

export default Calculator;