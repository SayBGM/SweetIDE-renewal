import React from 'react';
import Proptypes from 'prop-types';
import './css/signinSubBtn.css';

const SigninSubBtn = ({ text }) => {
  return <div className="signin-sub-btn">{text}</div>
}

SigninSubBtn.Proptypes = {
  text: Proptypes.string.isRequired
}

export default SigninSubBtn;