import React, { Component } from 'react';
import MyProjects from './MyProjects';
import GroupProjects from './GroupProjects'
import '../css/projectView.css';

class ProjectView extends Component {
  state = {
    projects: [
      [
       {id: '0', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '1', title: '동그란 LED에 불 켜보기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '2', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '3', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
      ],
      [
       {id: '4', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '5', title: '동그란 LED에 불 켜보기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '6', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
       {id: '7', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
      ],
      [
        {id: '8', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
        {id: '9', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
        {id: '10', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
        
      ]

    ],
    selectedProject: '0',
    isMore: false
  }

  render() {
    let selectedProject = [];
    
    this.state.projects.map(projects => {
      return selectedProject = selectedProject.concat(projects);
    })

    selectedProject = selectedProject.filter(project => {
      if(project.id === this.state.selectedProject) return true;
      return false;
    });
    
    return (
      <React.Fragment>
        <MyProjects
          selectProject = {this.selectProject}
          selectedProject = {selectedProject[0]}
          projects = {this.state.projects}
          isMore = {this.state.isMore}
          clickMoreBtn = {this.clickMoreBtn}
        />
        {/* <GroupProjects/> */}
      </React.Fragment>
    )
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

}

export default ProjectView;