import React, { Component } from 'react';
import AccountTitle from '../../components/Account/common/AccountTitle';
import SignupInputWrapper from '../../components/Account/signup/SignupInputWrapper';
import './signup.css';

class Signup extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <div id="signup-wrapper">
          <AccountTitle text="회원가입"/>
          <SignupInputWrapper/>
        </div>
      </div>
    )
  }
}

export default Signup;
