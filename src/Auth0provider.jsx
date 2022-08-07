import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";


export default function ({children}) {


    return (
        <Auth0Provider
        domain='https://dev-81nqhdy2.us.auth0.com'
        clientId='A6q8eeIevBO37mbaercJOAcuJU1LRRns'
        redirectUri={window.location.origin}
        audience= "https://dev-81nqhdy2.us.auth0.com/api/v2/"
        //Se necesita el audience
        >
            {children}
        </Auth0Provider>
    )
}