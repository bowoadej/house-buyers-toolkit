import { useState } from "react";

export default function LoginForm() {
    //const [existingUser, setExistingUser] = useState(false);

    const [isActive, setIsActive] = useState(true);

    const userName = 'john@appleseed.com';
    const passWord = 'wording123'

    function checkAuth() {
        const emailId = (document.getElementById("email") as HTMLInputElement).value;
        const passwordValue = (document.getElementById("password") as HTMLInputElement).value;

        if (emailId == userName && passwordValue == passWord) {
            return hideForm(true);
        } else {
            return false
        }
    }

    function hideForm(formValue: boolean) {
        if (formValue == false) {
            setIsActive(false)
        }
    }


    return (
        <div className="login-form-component">
            {isActive &&
                <div className="login-form-overlay">
                    <div id="login-form">
                        <h2>Login/Register</h2>
                        <label htmlFor="email"> Email: </label>
                        <br></br>
                        <input type="text" id="email" />
                        <br></br>
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input type="password" id="password" />
                        <br></br>
                        <button type="submit" onSubmit={() => checkAuth()}>Login</button>
                    </div>
                </div>
            }
        </div>
    )
}