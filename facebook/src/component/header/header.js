import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../header/header.css"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="head"><h1><b>facebook</b></h1></div>
                <div className="emailLabel">
                    <div className="par">
                        <p>Email or Phone</p>
                    </div>
                    <div className="input">
                        <input type="text"></input>
                    </div>
                    <div className="check">
                        <p><input type="checkbox"></input>keep me logged in</p>
                    </div>
                </div>
                <div className="passLabel">
                    <div className="par">
                        <p>Password</p>
                    </div>
                    <div className="input">
                        <input type="text"></input>
                    </div>
                    <div className="check">
                        <p id="forgot"><a>Forgotten account?</a></p>
                    </div>
                </div>
                <div className="submitt"> <Link to={"loginPage"} ><input type="submit" value="Log In"></input></Link></div>
            </div>

        );
    }
}