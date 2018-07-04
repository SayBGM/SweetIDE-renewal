import React, { Component } from 'react';
import SelectPlatform from './SelectPlatform';
import SelectProgrammingMode from './SelectProgrammingMode';
import SelectModule from './SelectModule';
import leftArrow from '../../assets/createProject/left-arrow.png';
import rightArrow from '../../assets/createProject/right-arrow.png';
import './css/createProject.css';

class CreateProject extends Component {
  state = {
    next: 1,
    current: 0,
    prev: -1,
    platform: '',
    modules: [],
    programmingMode: ''
  }

  render() {
    const { next, prev } = this.state; 
    return (
      <div id="create-project-section">
        <div className="move-page-btn-wrapper">
          {
            !(prev < 0) ? <img className="move-btn" src = {leftArrow} alt = "뒤로가기 버튼" onClick = {() => this.moveButtonClickHandler('PREV')}/> : ''
          }
        </div>
        {this.renderSelectSection()}
        <div className="move-page-btn-wrapper">
          {
            !(next > 2) ? <img className="move-btn" src = {rightArrow} alt = "앞으로가기 버튼" onClick = {() => this.moveButtonClickHandler('NEXT')}/> : ''
          }
        </div>
      </div>
    )
  }

  renderSelectSection = _ => {
    const { current } = this.state;

    switch(current) {
      case 0: return <SelectPlatform />
      case 1: return <SelectProgrammingMode />
      case 2: return <SelectModule />
    }
  }

  moveButtonClickHandler = (mode) => {
    let operationNumber = 0;
    const { prev, current, next } = this.state;

    switch(mode) {
      case 'PREV': operationNumber = -1; break;
      case 'NEXT': operationNumber = 1; break;
      default: break;
    }

    return this.setState({
      prev: prev + operationNumber,
      current: current + operationNumber,
      next: next + operationNumber
    }); 
  }
}

export default CreateProject;
