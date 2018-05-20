import React, { Component } from 'react';
import AccountTitle from '../../components/Account/common/AccountTitle';
import SigninInputWrapper from '../../components/Account/signin/SigninInputWrapper';
import SigninSubBtnWrapper from '../../components/Account/signin/SigninSubBtnWrapper'; 
import './signin.css';

class Signin extends Component {
  render() {
    return (
      <div id="signin-wrapper">
        <AccountTitle text="로그인"/>
        <SigninInputWrapper/>
        <SigninSubBtnWrapper/>
      </div>
    )
  }
}

export default Signin;
