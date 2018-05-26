import React, { Component } from 'react';
import MyProjects from './MyProjects';
import GroupProjects from './GroupProjects'
import '../css/projectView.css';

class ProjectView extends Component {
  state = {
    projects: [
      [
       {id: 0, title: 'Sweet Board Demo Project', type: 'pebble'},
       {id: 1, title: '동그란 LED에 불 켜보기', type: 'pebble'},
       {id: 2, title: '스피커로 방귀소리 내보내기', type: 'pebble'},
       {id: 3, title: 'Sweet Board Demo Project', type: 'pebble'}
      ],
      [
       {id: 4, title: 'Sweet Board Demo Project', type: 'pebble'},
       {id: 5, title: '동그란 LED에 불 켜보기', type: 'pebble'},
       {id: 6, title: '스피커로 방귀소리 내보내기', type: 'pebble'},
       {id: 7, title: '스피커로 방귀소리 내보내기', type: 'pebble'},
       ]
    ],
    selectedProject: 0,
    isMore: false
  }

  selectProject = id => {
    this.setState({
      selectedProject: id
    })
  }

  clickMoreBtn = _ => {
    this.setState({
      isMore: !this.state.isMore
    })
  }

  render() {
    return (
      <React.Fragment>
        <MyProjects
          selectProject = {this.selectProject}
          selectedProject = {this.state.selectedProject}
          projects = {this.state.projects}
          isMore = {this.state.isMore}
          clickMoreBtn = {this.clickMoreBtn}
        />
        <GroupProjects/>
      </React.Fragment>
    )
  }
}

export default ProjectView;