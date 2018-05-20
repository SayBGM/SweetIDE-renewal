import React from 'react';
import SigninSubBtn from './SignSubBtn';
import Filter from '../../basicComponent/Filter';
import './css/signinSubBtnWrapper.css';

const SigninSubBtnWrapper = _ => {
  return (
    <div id="signin-sub-btn-wrapper">
      <SigninSubBtn text="아직 회원이 아니세요?"/>
      <Filter/>
      <SigninSubBtn text="아이디 / 비밀번호 찾기"/>
    </div>
  )
}

export default SigninSubBtnWrapper;