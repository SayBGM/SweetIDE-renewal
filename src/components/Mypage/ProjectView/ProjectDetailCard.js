import React from 'react';
import Proptypes from 'prop-types';
import ProjectDetailContents from './ProjectDetailContents';
import '../css/projectView.css';

const ProjectDetailCard = (props) => {
  
  return (
    <div className="project-detail-card">
      <div id="project-detail-header-wrapper">
          <p id="project-detail-title">{props.selectedProject.title}</p>
          <p id="project-detail-intro">{props.selectedProject.intro}</p>
        </div>
      <ProjectDetailContents selectedProject = {props.selectedProject}/>
    </div>
  )
}

ProjectDetailCard.Proptypes = {
  selectedProject: {
    title: Proptypes.string.isRequired,
    intro: Proptypes.string.isRequired
  }
}

export default ProjectDetailCard;