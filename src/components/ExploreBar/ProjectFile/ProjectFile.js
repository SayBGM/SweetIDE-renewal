import React from 'react';
import Icons from '../../basicComponent/Icons'
import ProjectDirectory from './ProjectDirectory'
import './css/ProjectFile.css'

export default class ProjectFile extends React.Component {
  render(){
    return (
      <div className="ProjectFile">
         <span><Icons icon={'folder-open'} margin="7.5px" fontsize="20px"/>프로젝트 파일</span><span style={{float:'right'}}><Icons icon="plus" fontsize="20px"/></span>
         <div style={{marginTop:'5px', height: '100%'}}>
          <ProjectDirectory/>
         </div>
      </div>
    )
  }
}