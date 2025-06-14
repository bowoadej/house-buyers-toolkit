import { FeatureFlagsContext } from "../utils/FeatureFlags";
import { useContext, useState } from "react";
import LoginForm from "./LoginForm";

export default function Topline() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginButtonClick, setloginButtonClick] = useState(false);

    console.log("The Login button is" + " " + loginButtonClick);

    /*
    function handleClick(auth: boolean){
    if user(isLogged){
        userSession.logout()
    } else {
        userSession.login()
    }
    }
    */


    function handleLoginButton() {
        if (loginButtonClick) {
            return <LoginForm expand={true} onCloseButtonClick={() => setloginButtonClick(false)} />
        }
    }
    function setButtonClick() {
        setloginButtonClick((prevClickState) => !prevClickState); // Toggle state
        console.log("The Login button is" + " " + loginButtonClick);
    }

    return (
        <div className="topline">
            <ul>
                <li><h3 id="loggedIn" className="loggedInText" onClick={() => setButtonClick()}>
                    {isLoggedIn && login ?
                        'Logout' : 'Login'
                    }
                </h3>
                </li>
            </ul>
            {loginButtonClick &&
                handleLoginButton()
            }
        </div>

    )
}