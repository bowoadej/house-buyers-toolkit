import React from "react";

export interface AuthContextInterface {
    id: number | null; //example-id
    access_token: string | null; //jwt-token
    tokenType: string | null;
    expiresIn: number | null;
    refreshToken: string | null;
    expiresAt: number | null;
    email: string | null;
    isAuthenticated: boolean;
};

export const authContextDefaults: AuthContextInterface = {
    id: null, //example-id
    access_token: null, //jwt-token
    tokenType: null,
    expiresIn: null,
    refreshToken: null,
    expiresAt: null,
    email: null,
    isAuthenticated: false
};

export const AuthContext = React.createContext<AuthContextInterface>(
    authContextDefaults
);

