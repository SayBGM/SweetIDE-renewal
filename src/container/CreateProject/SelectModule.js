import React, { Component } from 'react';
import './css/createProject.css';

class SelectMoudule extends Component {
  render() {
    return (
      <div className="select-section">
        <p className="select-title">연결할 모듈들을 선택하세요</p>
        <div id="select-board-module-section" className="select-item-wrapper">
          <div id="board-wrapper"></div>
          <div id="port-line-wrapper">
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
          </div>
          <div id="select-module-wrapper">
            <div className="moudle"></div>
            <div className="moudle"></div>
            <div className="moudle"></div>
            <div className="moudle"></div>
          </div>
        </div>
        <div className="show-step-wrapper">
          <p>단계</p>
          <p>3 / 3</p>
        </div>
      </div>
    )
  }
}

export default SelectMoudule;
