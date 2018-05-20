import React from 'react';
import './css/inputText.css';

const InputText = ({ placeholder,type }) => {
  return <input className="contents-input" type={type} placeholder={placeholder}/>
}

export default InputText;