import React from 'react';
import SignupSubBtn from './SignSubBtn';
import './css/signupSubBtnWrapper.css';

const SignupSubBtnWrapper = _ => {
  return (
    <div id="signup-sub-btn-wrapper">
      <SignupSubBtn name="email" text="Sweet IDE 서비스에 대한 소식을 받습니다."/>
      <SignupSubBtn name="agree" text='SweetFab에서 제공하는 서비스약관에 동의합니다.'/>
    </div>
  )
}

export default SignupSubBtnWrapper;