import Disclaimer from "./Disclaimer";
import LoginForm from "./LoginForm";
import { FeatureFlagsContext } from "./FeatureFlags";
import { useContext, useState } from "react";


export default function Header() {
    const [showLogin, setShowLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useContext(FeatureFlagsContext).renderLogin;
    return (
        <div className='header'>
            <div className='header-container'>
                <h1>House Buyers Toolkit</h1>
                <div className="subheading">
                    <Disclaimer />
                    {login &&
                        <div className='header-right'>
                            {showLogin ?
                                <LoginForm /> : <p>Login</p>
                            }
                        </div>
                    }
                </div>

            </div>
            <br></br>
        </div >
    )
}