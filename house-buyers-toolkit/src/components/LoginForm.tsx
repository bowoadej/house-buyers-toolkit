import { useState } from "react";
import dotenv from 'dotenv';

interface loginFormProps {
    expand: boolean;
}

export default function LoginForm(props: loginFormProps) {

    var show: boolean = props.expand;

    const [isActive, setIsActive] = useState(show)

    function closePopup() {

        show = false
        setIsActive(show);
    }

    return (
        <>{isActive &&
            <div className="form-overlay">
                <div className="form-popup">
                    <div className="form-container">
                        <h2>Login</h2>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="username" placeholder="Username" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="text" className="password" placeholder="Password" />
                        <br />
                        <br></br>
                        <button id="close" className="close" onClick={() => closePopup()}>Close</button>
                    </div>
                </div>
            </div>
        }
        </>

    )
}