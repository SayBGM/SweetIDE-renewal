import React from 'react';
import Proptypes from 'prop-types';
import Icons from './../../basicComponent/Icons';
import './css/inputText.css';
import './css/inputTextCheck.css';

export default class InputTextCheck extends React.Component {
  render() {
    return ( < div className = "cpmtents-signup" >
      <div className = {"contents-inputname"} >
      {this.props.inputname}
      </div> 
      <input  className = "contents-input"
              id = {this.props.inputtype}
              type = {this.props.type}
              placeholder = {this.props.placeholder}
              onChange = {this.SingupCheck}
              onFocus = {this.SingupCheck}/>
      <div className = "contents-icon" >
        <Icons  icon = "none"
                size = "10px"
                id = {this.props.inputtype + "icon"}/>
      </div>
      </div>
    )
  }
  SingupCheck = _ => {
    const idReg = /^[0-9a-zA-Z]{8,16}$/i;
    const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,5}$/i
    const classListadd = (inputtype, addType) => {
      switch (addType) {
        case true:
          document.getElementById(inputtype).classList.remove("contents-input-wrong");
          document.getElementById(inputtype).classList.add("contents-input-right");
          document.getElementById(`${inputtype}icon`).classList.remove('fa-times');
          document.getElementById(`${inputtype}icon`).classList.remove('fa-none');
          document.getElementById(`${inputtype}icon`).classList.add('fa-check');
          break;

        case false:
          document.getElementById(inputtype).classList.remove("contents-input-right");
          document.getElementById(inputtype).classList.add("contents-input-wrong");
          document.getElementById(`${inputtype}icon`).classList.remove('fa-check');
          document.getElementById(`${inputtype}icon`).classList.remove('fa-none');
          document.getElementById(`${inputtype}icon`).classList.add('fa-times');
          break;
        default:
          break;
      }
    }
    const inputtype = this.props.inputtype;
    let value = document.getElementById(inputtype).value;
    switch (inputtype) {
      case 'id':
          classListadd('id', idReg.test(value));
        break;
      case 'password':
          classListadd('password', pwReg.test(value));
        break;
      case 'passwordcheck':
          classListadd('passwordcheck', document.getElementById("password").value === value && document.getElementById("password").value !== "");
        break;
      case 'email':
          classListadd('email', emailReg.test(value));
        break;
      default:
        break;
    }
  }

}

InputTextCheck.Proptypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
};