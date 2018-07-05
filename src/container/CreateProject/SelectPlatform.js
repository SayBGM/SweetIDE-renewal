import React, { Component } from 'react';
import './css/createProject.css';

class SelectPlatform extends Component {
  render() {
    const { selected, selectHandler } = this.props; 
    return (
      <div className="select-section">
        <p className="select-title">사용할 플랫폼을 선택하세요</p>
        <div className="select-item-wrapper">
          <div className = { selected === 0 ? "selected select-item" : "select-item" } onClick = {_ => selectHandler('PLATFORM', 0)} > 
            <span>SweetBoard</span>
            <span>Maker U</span> 
          </div>
          <div className = { selected === 1 ? "selected select-item" : "select-item" } onClick = {_ => selectHandler('PLATFORM', 1)} > 
            <span>Arduino</span>
            <span>Uno</span> 
          </div>
        </div>
        <div className="show-step-wrapper">
          <p>단계</p>
          <p>1 / 3</p>
        </div>
      </div>
    )
  }
}

export default SelectPlatform;
