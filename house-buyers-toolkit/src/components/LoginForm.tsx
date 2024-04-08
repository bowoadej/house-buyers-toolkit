import { useState } from "react";
import dotenv from 'dotenv';


export default function LoginForm(expand: boolean) {

    const [isActive, setIsActive] = useState(expand)

    function closePopup() {
        setIsActive(false);
    }

    return (
        <>
            <div className="form-popup">
                <div className="form-container">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button onClick={() => closePopup()} />
                </div>
            </div>
        </>

    )
}