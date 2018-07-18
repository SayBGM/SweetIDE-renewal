import React, { Component } from 'react';
import SelectPlatform from './SelectPlatform';
import SelectProgrammingMode from './SelectProgrammingMode';
import SelectDigitalModule from './SelectDigitalModule';
import SelectAnalogModule from './SelectAnalogModule';
import leftArrow from '../../assets/createProject/left-arrow.png';
import rightArrow from '../../assets/createProject/right-arrow.png';
import './css/createProject.css';

class CreateProject extends Component {
  state = {
    next: 1,
    current: 0,
    prev: -1,
    platformCategory: ['SweetBoard', 'ArduinoUno'],
    programmingModeCategory: ['Arduino Sketch', 'Pebble'],
    selectedPlatform: 0,
    selectedProgrammingMode: 0,
    digitalModules: [],
    analogModules: []
  }

  render() {
    const { next, prev } = this.state; 
    return (
      <div id="create-project-section">
        <div className="move-page-btn-wrapper">
          {
            !(prev < 0) ? <img className="move-btn" src = {leftArrow} alt = "뒤로가기 버튼" onClick = {() => this.moveButtonClickHandler('PREV')}/> : false
          }
        </div>
        {this.renderSelectSection()}
        <div className="move-page-btn-wrapper">
          {
            !(next > 3) ? <img className="move-btn" src = {rightArrow} alt = "앞으로가기 버튼" onClick = {() => this.moveButtonClickHandler('NEXT')}/> : false
          }
        </div>
      </div>
    )
  }

  renderSelectSection = _ => {
    const { current, selectedPlatform, selectedProgrammingMode } = this.state;

    switch(current) {
      case 0: return <SelectPlatform selectHandler = {this.selectProjectInfo} selected = {selectedPlatform} />
      case 1: return <SelectProgrammingMode selectHandler = {this.selectProjectInfo} selected = {selectedProgrammingMode} />
      case 2: return <SelectDigitalModule selectHandler = {this.selectProjectInfo} />
      case 3: return <SelectAnalogModule selectHandler = {this.selectProjectInfo} />
      default: return;
    }
  }

  moveButtonClickHandler = (category) => {
    let operationNumber = 0;
    const { prev, current, next } = this.state;

    switch(category) {
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

  selectProjectInfo = (category, data) => {
    switch(category) {
      case 'PLATFORM': return this.setState({ selectedPlatform: data });
      case 'PROGRAMMING_MODE': return this.setState({ selectedProgrammingMode: data });
      case 'MODULES': return this.setState({ modules: data });
      default: return;
    }
  }
}

export default CreateProject;
