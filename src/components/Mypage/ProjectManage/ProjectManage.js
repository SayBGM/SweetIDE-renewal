import React, { Component } from 'react';
import '../css/projectManage.css';

class ProjectManage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project-view-title">내가 생성한 그룹 (3)</div>
        <div id="group-card-list">
          <div className="project-card group-card">

          </div>
          <div className="project-card group-card">

          </div>
          <div className="project-card group-card">

          </div>
          <div className="project-card group-card">  
          </div>
        </div>


        <div className="project-view-title">그룹 상세보기</div>
      </React.Fragment>
    )
  }
}

export default ProjectManage;