import React,{Component} from 'react';
import "../image-form/image-form.css";
// import connectingPeople from "../image-form/connecting.png";
export default class ImageForm extends Component{
    render(){
        return(
            <div className="banner">
            <p><b>Facebook helps you connect and share with the people in your Life</b></p>
            <img src="./connecting.png" alt="connecting people"></img>
            </div>
        );
    }
}