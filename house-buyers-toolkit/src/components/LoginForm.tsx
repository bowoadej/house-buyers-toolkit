import { useState } from "react";
import dotenv from 'dotenv';

interface loginFormProps {
    expand: boolean,
    onCloseButtonClick: () => void
}

export default function LoginForm(props: loginFormProps) {



    return (
        <>{props.expand &&
            <div className="form-overlay">
                <div className="form-popup">
                    <div className="form-container">
                        <h2 id="close" className="close" onClick={props.onCloseButtonClick}>x</h2>
                        <h2>Login</h2>
                        <label htmlFor="username">Username</label>
                        <br></br>
                        <input type="text" className="username" placeholder="Username" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input type="text" className="password" placeholder="Password" />
                        <br />
                        <br></br>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div >
        }
        </>

    )
}