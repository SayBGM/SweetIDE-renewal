import React, { Component } from 'react';
import './css/createProject.css';

class SelectProgrammingMode extends Component {
  render() {
    const { selected, selectHandler } = this.props; 
    return (
      <div className="select-section">
        <p className="select-title">프로그래밍 방식을 선택하세요</p>
        <div className="select-item-wrapper">
          <div className="select-item" className = { selected === 0 ? "selected select-item" : "select-item" } onClick = {_ => selectHandler('PROGRAMMING_MODE', 0)} > 
            <span>Arduino Sketch</span>
            <span>with SweetBoard Library</span> 
          </div>
          <div className="select-item" className = { selected === 1 ? "selected select-item" : "select-item" } onClick = {_ => selectHandler('PROGRAMMING_MODE', 1)} > 
            <span>Pebble</span>
          </div>
        </div>
        <div className="show-step-wrapper">
          <p>단계</p>
          <p>2 / 3</p>
        </div>
      </div>
    )
  }
}

export default SelectProgrammingMode;
