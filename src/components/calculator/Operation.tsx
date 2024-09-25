
import NumberInput from "./NumberInput";

function Operation (
    props:{
        rightNumber: (x: number) => void, 
        leftNumber: (x: number) => void,
        operator: (x: string) => void
    }
    ) {

    function onChangeEventHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        props.operator(event.target.value)
    }

    
    
    return (
        <div>
            <NumberInput
             setNumber = {props.leftNumber}/>

            <select onChange={onChangeEventHandler}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <NumberInput
             setNumber = {props.rightNumber}/>
        </div>
    )
}

export default Operation;