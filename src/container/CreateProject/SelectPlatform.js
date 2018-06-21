import React, { Component } from 'react';
import './css/createProject.css';

class SelectPlatform extends Component {
  state = {
    next: '',
    prev: '',
    current: '',

  }
  render() {
    return (
      <div id="create-project-section">
        <p>사용할 플랫폼을 선택하세요</p>
        <div>
          <div>
            SweetBoard Maker U
          </div>
          <div>
            Arduino Uno
          </div>
        </div>
        <p>단계</p>
        <p>1/3</p>
      </div>
    )
  }
}

export default SelectPlatform;
