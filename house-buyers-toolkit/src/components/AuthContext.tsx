import { useState, createContext } from React;

export interface AuthContextInterface {
    id: boolean; //example-id
    access_token: string | null; //jwt-token
    tokenType: string;
    expiresIn: number | null;
    refreshToken: string;
    expiresAt: number | null;
    email: string;
    isAuthenticated: boolean;
}

export const

export const AuthContext() = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const contextValues = { values };
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )

}
