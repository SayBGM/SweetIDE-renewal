import React, { Component } from 'react';
import MyProjects from './MyProjects';
import GroupProjects from './GroupProjects'
import '../css/projectView.css';

class ProjectView extends Component {
  render() {
    return (
      <React.Fragment>
        <MyProjects/>
        <GroupProjects/>
      </React.Fragment>
    )
  }
}

export default ProjectView;