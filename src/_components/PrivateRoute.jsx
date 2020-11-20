import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../_services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={props => {

        
        const expiry = localStorage.getItem('expiry');
        
        if (expiry < new Date().toString()) {
            
            authenticationService.logout();
            
        }
        
        
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        var dt = new Date();
        dt.setMinutes(dt.getMinutes() + 15);
        localStorage.setItem('expiry', dt);

        if (props.location.pathname == "/dashboard") {
            
            if (localStorage.getItem('role') != "Admin") {
                return <Redirect to={{ pathname: '/error'}} />
            }
        }
        // authorised so return component
        return <Component {...props} />
    }} />
)