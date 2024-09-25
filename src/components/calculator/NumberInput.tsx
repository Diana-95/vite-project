

function NumberInput (props:{setNumber: (number:number)=> void}) {

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.value)
            props.setNumber(Number(event.target.value)) 
    }
    return (
        <input 
            type = "number"
            onChange = {onChangeHandler}
        />
    )
}

export default NumberInput;