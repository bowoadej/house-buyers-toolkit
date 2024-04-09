import { FeatureFlagsContext } from "./FeatureFlags";
import { useContext, useState } from "react";
import LoginForm from "./LoginForm";

export default function Topline() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    return (
        <div className="topline">
            <ul>
                <li><h3 id="loggedIn" className="loggedInText">
                    {isLoggedIn && login ?
                        'Logout' : 'Login'
                    }
                </h3>
                </li>
            </ul>
        </div>

    )
}