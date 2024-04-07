import { useState } from "react";
import dotenv from 'dotenv';

export default function LoginForm() {
    const netlifyIdentity = require('netlify-identity-widget');


    netlifyIdentity.init({
        container: '#netlify-modal', // defaults to document.body
        locale: 'en' // defaults to 'en'
    });

    netlifyIdentity.open(); // open the modal


    return (
        <>
            <h2>Login</h2>

        </>

    )
}