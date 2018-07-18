import React, { Component } from 'react';
import MypageNav from '../../components/Mypage/MypageNav/MypageNav';
import ProjectView from '../../components/Mypage/ProjectView/ProjectView';
import GroupManage from '../../components/Mypage/GroupManage/GroupManage';
import './mypage.css';

class Mypage extends Component {
  state = {
    mode: 0
  }

  render() {
    return (
      <div id="mypage-section">
        <MypageNav mode = {this.state.mode} handelClickEevent = {this.handleNavClickEevent} />
        <div id="mypage-contents">
          {this.renderMypage()}
        </div>
      </div>
    )
  }

  handleNavClickEevent = mode => {
    this.setState({
      mode: mode
    });
  }

  renderMypage = _ => {
    switch(this.state.mode) {
      case 0: return <ProjectView/>

      case 1: return;
      
      default: return;
    }
  }
 }

export default Mypage;
