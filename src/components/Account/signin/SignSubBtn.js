import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './css/signinSubBtn.css';

const SigninSubBtn = ({ link, text }) => {
  return <div className="signin-sub-btn"><Link to={link}>{text}</Link></div>
}

SigninSubBtn.Proptypes = {
  text: Proptypes.string.isRequired
}

export default SigninSubBtn;