import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "../registration-form/signUp.css";
export default class SignUp extends Component{
    render(){
        return (
            <div><p><h1>Sign Up Successfull Click <span><Link to={"loginForm"}>here</Link></span> to Login</h1></p></div>
        );
    }
}