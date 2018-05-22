import React from 'react';
import Proptypes from 'prop-types';
import './css/inputText.css';

const InputText = ({ inputname, placeholder,type }) => {
  return (
    <div className="cpmtents">
      <div className="contents-inputname">{inputname}</div>
      <input className="contents-input" type={type} placeholder={placeholder}/>
    </div>
  )
}

InputText.Proptypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
}

export default InputText;