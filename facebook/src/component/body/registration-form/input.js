import React,{Component} from 'react';
import "../registration-form/input.css"
export default class Input extends Component{
    render(){
        
        return(
                <input className="inputType" type={this.props.type} placeholder={this.props.placeholder} style={{width:this.props.width}}/>
                
        );
    }
}