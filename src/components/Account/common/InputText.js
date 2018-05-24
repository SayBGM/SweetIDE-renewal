import React from 'react';
import Proptypes from 'prop-types';
import './css/inputText.css';

const InputText = ({ placeholder,type }) => {
  return (
    <div className="cpmtents">
      <input className="contents-input" type={type} placeholder={placeholder}/>
    </div>
  )
}

InputText.Proptypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
}

export default InputText;