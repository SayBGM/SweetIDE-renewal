import React, { Component } from 'react';
import '../css/projectView.css';

class MyProjects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project-view-title">나의 프로젝트 (3)</div>
        <div id="project-card-list-wrapper">
          <div className="project-detail-card">

          </div>
          <div id="my-project-card-list">
            <div className="project-card my-project">

            </div>
            <div className="project-card my-project">
              
            </div>
            <div className="project-card my-project">

            </div>
            <div className="project-card my-project">
              
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MyProjects;