import React,{Component} from 'react';
import "../body/body.css";
import ImageForm from "./image-form/image-form";
import RegistrationForm from "./registration-form/registration-form";
export default class Body extends Component{
    render(){
        return(
        <div className="root1">
        <ImageForm />
        <RegistrationForm />
        </div>
        );
        
    }
}