import React, { Component } from 'react';
import MypageNavBtn from './MypageNavBtn';
import './css/mypageNav.css';

class MypageNav extends Component {
  state = {
    buttons: ['프로젝트', '그룹관리', '정보수정']
  }

  render() {
    return (
      <div id="mapage-nav-wrapper">
        <div id="mypage-logo-wrapper">
          <div className="mypage-logo sweet">Sweet</div>
          <div className="mypage-logo">IDE</div>
        </div>

        <div id="mypage-nav-btn-wrapper">
          <div id="mypage-nav-btn-group">
            {this.renderNavBtn()}
          </div>
        </div>
      </div>
    )
  }

  renderNavBtn = _ => {
    return this.state.buttons.map((val, index) => {
      const isSelected = this.props.mode === index ? true : false;

      return <MypageNavBtn key = {index}
                           index = {index}
                           text = {val} 
                           isSelected = {isSelected}
                           handelClickEevent = {this.props.handelClickEevent} />
    })
  }
}

export default MypageNav;