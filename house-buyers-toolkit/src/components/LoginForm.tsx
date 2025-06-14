import { useState } from "react";
import { useContext } from "react";
import { FeatureFlagsContext } from "../utils/FeatureFlags";
import { AuthContextDetails } from "../utils/AuthContext";

interface loginFormProps {
    expand: boolean,
    onCloseButtonClick: () => void
}

interface loginFormData {
    username: string,
    password: string,
}


export default function LoginForm(props: loginFormProps) {

    //const [userContext, setUserContext] = useContext(AuthContextDetails);

    const loginFormDataDefaults: loginFormData = {
        username: '',
        password: '',
    }
    const placeHolderAuth = useContext(FeatureFlagsContext).placeHolderAuth;

    const [userId, setUserId] = useState(loginFormDataDefaults.username);

    const [password, setPassword] = useState(loginFormDataDefaults.password);

    const userName = process.env.PLACEHOLDER_AUTH_USERNAME;

    function authUser() {
        if (placeHolderAuth) {

            if (userName === userName && password === password) {
                console.log("Customer has logged in.")

            } else {
                console.log("Customer has an issue logged in")
            }

        }
    }


    return (
        <>{props.expand &&
            <div className="form-overlay">
                <div className="form-popup">
                    <div className="form-container">
                        <h2 id="close" className="close" onClick={props.onCloseButtonClick}>x</h2>
                        <h2>Login</h2>
                        <form onSubmit={authUser}>
                            <label htmlFor="username">Username</label>
                            <br></br>
                            <input type="text" className="username" placeholder="Username" onChange={(e) => setUserId(e.target.value)} />
                            <br />
                            <label htmlFor="password">Password</label>
                            <br></br>
                            <input type="password" className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <br></br>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div >
        }
        </>

    )
}