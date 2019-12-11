import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequiresAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const validToken = localStorage.getItem('userToken');
        if (!validToken) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)

export default RequiresAuth;