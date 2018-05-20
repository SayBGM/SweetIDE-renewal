import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    headerBtns : ['가격 정책', '릴리즈 노트', '대시보드', '도움말', '커뮤니티', '로그인']
  }

  render() {
    return (
      <div id="header-section">
        <div id="header-contents-wrapper">
          <div id="header-logo-btn">

          </div>
          <div id="filter"></div>
          <div id="header-text-btn-wrapper">
            {this.renderHeaderBtn()}
          </div>
        </div>
      </div>
    )
  }

  renderHeaderBtn = _ => {
    return this.state.headerBtns.map(btn => {
      return <div className="header-btn">{ btn }</div>
    });
  }
}

export default Header;