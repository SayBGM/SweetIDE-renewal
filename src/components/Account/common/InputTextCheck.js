import React from 'react';
import Proptypes from 'prop-types';
import './css/inputText.css';
import './css/inputTextCheck.css';

export default class InputTextCheck extends React.Component{
  render(){
    return (
      <div className="cpmtents">
      <div className={"contents-inputname"}>{this.props.inputname}</div>
      <input className="contents-input" id={this.props.inputtype} type={this.props.type} placeholder={this.props.placeholder} onChange={this.SingupCheck}/>
    </div>
    )
  }
  SingupCheck = _ => {
    const idReg = /^[0-9a-zA-Z]{8,16}$/i;
    const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,5}$/i
    const inputtype = this.props.inputtype;
    let value = document.getElementById(inputtype).value;
    console.log(inputtype+"  "+value);
    console.log(idReg.test(value));
    switch(inputtype){
      case 'id': 
        if(idReg.exec(value)){
          document.getElementById(inputtype).classList.remove("contents-input-wrong");
          document.getElementById(inputtype).classList.add("contents-input-right");
        }
        else{
          document.getElementById(inputtype).classList.remove("contents-input-right");
          document.getElementById(inputtype).classList.add("contents-input-wrong");
        }
        break;
      case 'password' :
        if(pwReg.exec(value)){
          document.getElementById(inputtype).classList.remove("contents-input-wrong");
          document.getElementById(inputtype).classList.add("contents-input-right");
        }
        else{
          document.getElementById(inputtype).classList.remove("contents-input-right");
          document.getElementById(inputtype).classList.add("contents-input-wrong");
        }
        break;
      case 'passwordcheck' :
        if(document.getElementById("password").value === value){
          document.getElementById(inputtype).classList.remove("contents-input-wrong");
          document.getElementById(inputtype).classList.add("contents-input-right");
        }
        else{
          document.getElementById(inputtype).classList.remove("contents-input-right");
          document.getElementById(inputtype).classList.add("contents-input-wrong");
        }
        break;
      case 'email':
        if(emailReg.exec(value)){
          document.getElementById(inputtype).classList.remove("contents-input-wrong");
          document.getElementById(inputtype).classList.add("contents-input-right");
        }
        else{
          document.getElementById(inputtype).classList.remove("contents-input-right");
          document.getElementById(inputtype).classList.add("contents-input-wrong");
        }
        break;
      default:
        break;
    }
  }
}

InputTextCheck.Proptypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
}