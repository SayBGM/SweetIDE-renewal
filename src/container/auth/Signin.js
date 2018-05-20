import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {
  render() {
    return (
      <div id="signin-wrapper">
        <div id="signin-text">로그인</div>
        <div id="signin-input-wrapper">
          <input className="signin-input signin-contents" type="text" placeholder="아이디"/>
          <input className="signin-input signin-contents" type="password" placeholder="비밀번호"/>
          <div id="signin-submit-btn" className="signin-contents">로그인</div>
        </div>
        <div id="signin-sub-btn-wrapper">
          <div className="signin-sub-btn">아직 회원이 아니세요?</div>
          <div className="filter"></div>
          <div className="signin-sub-btn">아이디 / 비밀번호 찾기</div>
        </div>
      </div>
    )
  }
}

export default Signin;
