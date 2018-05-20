import React, { Component } from 'react';
import MypageNav from '../../components/Mypage/MypageNav';
import './mypage.css';

class Mypage extends Component {
  state = {
    mode: 0
  }

  render() {
    return (
      <div id="mypage-section">
        <MypageNav mode = {this.state.mode} handelClickEevent = {this.handleNavClickEevent} />
      </div>
    )
  }

  handleNavClickEevent = mode => {
    this.setState({
      mode: mode
    });
  }
}

export default Mypage;
