import { useContext, useState } from "react"
import { AuthContextDetails } from "../utils/AuthContext";

export default function Profile(personaName: String) {

    const profileDefaults = useContext(AuthContextDetails);
    const [userId, setUserId] = useState(profileDefaults.userId);
    const [isLoggedIn, setIsLoggedIn] = useState(profileDefaults.isLoggedIn);

    return (
        <div id="profile-container">
            <h2>Hi {profileDefaults.userId}</h2>
            <h3>Profile</h3>
        </div>
    )
}