import React from 'react';
import Proptypes from 'prop-types';
import './css/inputText.css';

const InputText = ({ placeholder,type }) => {
  return <input className="contents-input" type={type} placeholder={placeholder}/>
}

InputText.Proptypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
}

export default InputText;