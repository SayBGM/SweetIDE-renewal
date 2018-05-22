import React from 'react';
import InputText from '../common/InputText';
import AccountSubmitBtn from '../common/AccountSubmitBtn';
import SignupSubBtnWrapper from './SignupSubBtnWrapper';
import './css/signupInputWrapper.css';

const SignupInputWrapper = _ => {
  return (
    <div id="signup-input-wrapper">
      <InputText inputname="아이디" placeholder="8~16자 이내" type="text"/>
      <InputText inputname="비밀번호" placeholder="특수문자, 영어 소문자, 대문자를 포함해서 8자이상" type="password"/>
      <InputText inputname="비밀번호 확인" placeholder="비밀번호 한 번 더 입력" type="password"/>
      <InputText inputname="이메일" placeholder="example@domain.com" type="text"/>
      <SignupSubBtnWrapper/>
      <AccountSubmitBtn text="회원가입"/>
    </div>
  )
}

export default SignupInputWrapper;