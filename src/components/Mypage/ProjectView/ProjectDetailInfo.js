import React from 'react';
import '../css/projectView.css';

const ProjectDetailInfo = (props) => {
  return (
    <div className="project-detail-info-wrapper">
      <div className="project-detail-info-title">{props.title}</div>
      <div className="project-detail-info-contents">{props.contents}</div>
    </div>
  )
}

export default ProjectDetailInfo;