import React from 'react';
import { Link } from 'react-router-dom';
import './css/MainNavigation.css';

export default class MainNavigation extends React.Component{
  state = {
    headerBtns : ['가격 정책', '릴리즈 노트', '대시보드', '도움말', '커뮤니티', '로그인']
  }

  render(){
    return (
      <div className="main-header">
          <div id="main-header-contents-wrapper">
          <div className="filter"></div>
          <div id="header-text-btn-wrapper" className="main-btn">
            {this.renderHeaderBtn()}
          </div>
        </div>
      </div>
    )
  }

  renderHeaderBtn = _ => {
    return this.state.headerBtns.map((btn, index) => {
      if(btn === "로그인"){
        return <Link to="/signin"><div key = {index} className="main-header-btn main-header-login-btn">{ btn }</div></Link>
      }else{
        return <div key = {index} className="main-header-btn">{ btn }</div>
      }
    });
  }
}