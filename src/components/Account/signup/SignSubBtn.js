import React from 'react';
import Proptypes from 'prop-types';
import './css/signupSubBtn.css';

const SignupSubBtn = ({ name, text }) => {
  return (
    <div className="signup-sub-btn" id={name}>
      <input type="checkbox" className={'check-box'} id={name+'check'} name={name} />
      <label htmlFor={name+'check'} className="check-box"></label>
      <span 
        onClick={
          () => (document.getElementById(name+'check').checked)? 
          document.getElementById(name+'check').checked = false : 
          document.getElementById(name+'check').checked = true
        }> 
        {text}
      </span>
      </div>
  )
}

SignupSubBtn.Proptypes = {
  text: Proptypes.string.isRequired
}

export default SignupSubBtn;