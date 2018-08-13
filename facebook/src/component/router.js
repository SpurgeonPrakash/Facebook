import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing-page';
import LoginPage from './header/loginPage';
import SignUp from './body/registration-form/signUp';

let routed=()=>{
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/loginPage" exact component={LoginPage} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/loginForm" exact component={LandingPage} />
            
        </div>
    );
}
export default routed;