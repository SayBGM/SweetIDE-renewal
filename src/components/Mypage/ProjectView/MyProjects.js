import React, { Component } from 'react';
import ListView from './ListView';
import '../css/projectView.css';

class MyProjects extends Component {
  render() {
    const { isMore } = this.props;
    return (
      <React.Fragment>
        <div className="project-view-title">나의 프로젝트 (3)</div>
        <div id="project-card-list-wrapper">
          <div className="project-detail-card">

          </div>

          <ListView
            projects = {this.props.projects[0]}
            isMore = {false}
          />        
        </div>
        {this.props.projects.length > 1 && isMore ? this.renderMoreProject() : ''}
        <div id="more-btn" onClick={this.props.clickMoreBtn}>
          {isMore ? '축소' : '더보기' }
        </div>
      </React.Fragment>
    )
  }

  renderMoreProject = _ => {
    const { projects } = this.props;
    const tempProjects = projects.filter( _ => { return true; });
    const moreProjects = tempProjects.splice(1);
    
    return moreProjects.map((projects, index) => {
      return (
        <ListView
          key = {index}
          projects = {projects}
          isMore = {true}
        />   
      )
    })
  }
}

export default MyProjects;