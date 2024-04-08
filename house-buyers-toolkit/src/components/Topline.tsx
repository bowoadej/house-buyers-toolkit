import { FeatureFlagsContext } from "./FeatureFlags";
import { useContext, useState } from "react";
import LoginForm from "./LoginForm";

export default function Topline() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useContext(FeatureFlagsContext).renderLogin;



    return (
        <div className="topline">
            <ul>
                <li><h3 id="loggedIn" className="loggedInText">
                    {isLoggedIn && login ?
                        'Hi PLACEHOLDER_NAME' : 'Login'
                    }
                </h3>
                </li>
            </ul>
        </div>

    )
}