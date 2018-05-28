import React, { Component } from 'react';
import '../css/projectView.css';

class ListView extends Component {
  render() {
    return (
      <React.Fragment>
        {this.renderProject()}
      </React.Fragment>
    )
  }

  renderProject = _ => {
    const { projects } = this.props;
    let wrapperStyle = this.props.isMore ? 'group-project-card-list' : 'my-project-card-list';
    return (
      <div id = {wrapperStyle}>
        {
          projects.map(project => {
            let cardStyle = 'project-card';
            cardStyle += this.props.isMore ? ' group-project' : ' my-project';
            cardStyle += this.props.selectedProject === project.id ? ' selected-project' : '';

            return(
              <div className = {cardStyle} onClick={() => this.props.selectProject(project.id)} key = {project.id}>
                <p className="project-title">{project.title}</p>
                <p className="project-type">{project.type}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ListView;