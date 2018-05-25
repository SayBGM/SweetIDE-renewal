import React from 'react';
import InputTextCheck from '../common/InputTextCheck';
import AccountSubmitBtn from '../common/AccountSubmitBtn';
import SignupSubBtnWrapper from './SignupSubBtnWrapper';
import './css/signupInputWrapper.css';

export default class SignupInputWrapper extends React.Component {
  render(){
    return (
      <div id="signup-input-wrapper">
        <InputTextCheck inputname="아이디" placeholder="8~16자 이내" type="text" inputtype="id"/>
        <InputTextCheck inputname="비밀번호" placeholder="특수문자와 영어, 숫자를 포함해서 8자이상" type="password" inputtype="password"/>
        <InputTextCheck inputname="비밀번호 확인" placeholder="비밀번호 한 번 더 입력" type="password" inputtype="passwordcheck"/>
        <InputTextCheck inputname="이메일" placeholder="example@domain.com" type="email" inputtype="email"/>
        <SignupSubBtnWrapper/>
        <AccountSubmitBtn text="회원가입"/>
      </div>
    )
  } 
}