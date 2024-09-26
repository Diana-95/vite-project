import { useState } from "react";
import classes from "./styles.module.css"
function FormComponent () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    function onNameChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function onEmailChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function onSubmitEventHandler (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let isValidN = name != ''
        setIsValidName(isValidN);
        let isValidE = email.includes('@') && email !== ''
        setIsValidEmail(isValidE);
    }
    return (
        <section>
            <form onSubmit={onSubmitEventHandler} className={(classes as any).login_form_cls}>
                <label htmlFor = "name_input">Your email</label>
                <input 
                    className={isValidName === false ? (classes as any).invalid_input: ""}
                    onChange={onNameChangeHandler} 
                    id = "name_input" />

                <label htmlFor = "email_input">Your password</label>
                <input 
                    className={isValidEmail === false ? (classes as any).invalid_input: ""}
                    onChange={onEmailChangeHandler} id = "email_input" />

                <button> Submit </button>
            </form>
        </section>
    )
}
export default FormComponent;