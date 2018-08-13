import React, { Component } from 'react';
import "../registration-form/registration-form.css";
import Input from "./input";
import {Link} from 'react-router-dom';
export default class RegistrationForm extends Component {
    render() {
        return (

            <div className="reg">
                <h1>Create an account</h1>
                <p>Its free and always will be.</p>
                <Input type="text" placeholder="&nbsp;First name" width="214px" />
                <Input type="text" placeholder="&nbsp;Surname" width="214px" />
                <Input type="text" placeholder="&nbsp;Mobile number or email address" width="440px" />
                <Input type="text" placeholder="&nbsp;New password" width="440px" />
                <div className="bday"><h3>
                    Birthday
                    </h3>
                    <select className="days">
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select className="days">
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
                    <select className="days">
                        <option>Year</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                    </select>

                    <a>Why do I need ton provide my date of birth?</a></div>

                <input type="radio" name="gender" value="male" /><p className="male">Female</p>
                <input type="radio" name="gender" value="female" /><p className="gender">Male</p>
                <div className="terms">
                    <p id="terms1">By clicking Sign Up, you agree to our <span className="spn">Terms</span>,<span className="spn">Data Policy</span> and <span className="spn">Cookie Policy</span>. You may recieve SMS notifications from us and can opt out at any time.</p>
                </div>
                <div className="signUp">
                  <Link to={"signUp"}><input type="Submit" value="Sign Up" /></Link>
                </div>
                <div className="createPage">
                <p><span>Create a Page</span> for a celebrity,band or business.</p>
                </div>
            </div>
        );
    }
}