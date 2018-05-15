import React from 'react';
import Icons from '../../core/basicComponent/Icons'
import ProjectDirectory from './ProjectDirectory'
import './css/ProjectFile.css'

export default class ProjectFile extends React.Component {
  render(){
    return (
      <div className="ProjectFile">
         <div className="title" style={{marginBottom:'10px'}}><span><Icons icon={'folder-open'}/>프로젝트 파일</span></div>
         <ProjectDirectory/>
      </div>
    )
  }
}