import React from 'react';
import ProjectDetailInfo from './ProjectDetailInfo';
import '../css/projectView.css';

const ProjectDetailContents = (props) => {
  return (
    <div id="project-detail-contents-wrapper">
      <ProjectDetailInfo title = "프로젝트 ID" contents = {props.selectedProject.id} />
      <ProjectDetailInfo title = "프로젝트 타입" contents = {props.selectedProject.type} />
      <ProjectDetailInfo title = "최초 생성일" contents = {props.selectedProject.createdDate} />
      <ProjectDetailInfo title = "최종 수정일" contents = {props.selectedProject.modifiedDate} />
      <ProjectDetailInfo title = "프로젝트 용량" contents = {props.selectedProject.size} />
    </div>
  )
}

export default ProjectDetailContents;