import { useState } from "react";

function EmailForm () {

    const [email, setEmail] = useState('');
    const [isEmailCorrect, setIsEmailCorrect] = useState(true);

    function onChangeEventHandler (event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function onSubmitEventHandler (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        email.includes('@') ?
            setIsEmailCorrect(true)
            : setIsEmailCorrect(false)

    };

    return (
        <section>
            <form onSubmit = {onSubmitEventHandler}>
                <h3></h3>
                <label htmlFor="email">
                    Your email
                </label>
                <input 
                    name="email"
                    onChange = {onChangeEventHandler}
                    type="text" />
                <button  
                    type = "submit">Submit
                    </button>
            </form>
            {!isEmailCorrect ? <p>Invalid email address entered </p> : null}
        </section>
    )
}

export default EmailForm;