import React from 'react';
import InputText from '../common/InputText';
import AccountSubmitBtn from '../common/AccountSubmitBtn';
import './css/signinInputWrapper.css';

const SigninInputWrapper = _ => {
  return (
    <div id="signin-input-wrapper">
      <InputText placeholder="아이디" type="text"/>
      <InputText placeholder="비밀번호" type="password"/>
      <AccountSubmitBtn text="로그인"/>
    </div>
  )
}

export default SigninInputWrapper;