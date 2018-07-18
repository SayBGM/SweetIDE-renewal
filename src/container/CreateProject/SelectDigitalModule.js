import React, { Component } from 'react';
import './css/createProject.css';

class SelectDigitalModule extends Component {
  render() {
    return (
      <div className="select-section">
        <p className="select-title">연결할 디지털 모듈을 선택하세요</p>
        <div id="select-board-module-section" className="select-item-wrapper">
          <div id="board-wrapper"></div>
          <div id="port-line-wrapper">
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
            <div className="port-line"><div className="line"></div></div>
          </div>
          <div id="select-module-wrapper">
            <div className="moudle">포트 1 (클릭)</div>
            <div className="moudle">포트 2 (클릭)</div>
            <div className="moudle">포트 3 (클릭)</div>
            <div className="moudle">포트 4 (클릭)</div>
            <div className="moudle">포트 5 (클릭)</div>
          </div>
        </div>
        <div className="show-step-wrapper">
          <p>단계</p>
          <p>3 / 4</p>
        </div>
      </div>
    )
  }
}

export default SelectDigitalModule;
