import React, { Component } from 'react';
import ListView from './ListView';
import ProjectDetailCard from './ProjectDetailCard';
import MyprojectBtn from './MyprojectBtn';
import '../css/projectView.css';

class MyProjects extends Component {
  render() {
    const { projects, selectedProject, isMore } = this.props;
    
    return (
      <div id="my-project-section">
        <div className="project-view-title">나의 프로젝트 ({  })</div>
        <MyprojectBtn contents = "새 프로젝트" eventHandler = {() => {}}/>
        <div id="project-card-list-wrapper">
          <ProjectDetailCard selectedProject = {selectedProject}/>
          <ListView
            projects = {this.props.projects[0]}
            isMore = {false}
            selectProject = {this.props.selectProject}
            selectedProject = {selectedProject.id}
          />        
        </div>
        {projects.length > 1 ? this.renderMoreProject() : ''}
        <MyprojectBtn contents = {isMore ? '축소' : '더보기' } eventHandler = {this.props.clickMoreBtn}/>
      </div>
    )
  }

  renderMoreProject = _ => {
    const { projects, isMore, selectedProject } = this.props;
    const tempProjects = projects.filter( _ => { return true; });
    const moreProjects = tempProjects.splice(1);
    
    return (
      <React.Fragment>
        { isMore ? 
          moreProjects.map((projects, index) => {
            return (
              <ListView
                key = {index}
                projects = {projects}
                isMore = {true}
                selectProject = {this.props.selectProject}
                selectedProject = {selectedProject.id}
              />   
            )
          })
          : ''
        }
      </React.Fragment>
    )
  }
}

export default MyProjects;