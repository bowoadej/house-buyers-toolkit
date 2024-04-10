import { FeatureFlagsContext } from "./FeatureFlags";
import { useContext, useState } from "react";
import LoginForm from "./LoginForm";

export default function Topline() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginButtonClick, setloginButtonClick] = useState(false);


    const login = useContext(FeatureFlagsContext).renderLogin;

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
            return <LoginForm expand={true} />
        } else {
            return <LoginForm expand={false} />
        }
    }
    function setButtonClick() {
        if (!loginButtonClick) {
            setloginButtonClick(true);
        } else {
            setloginButtonClick(false);
        }
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