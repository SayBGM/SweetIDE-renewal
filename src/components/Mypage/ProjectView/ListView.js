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
 
    if(this.props.isMore) {
      return (
        <div id="group-project-card-list">
          {
            projects.map(project => {
              return(
                <div className="project-card group-project" onClick={this.props.selectProject} key = {project.id}>
                  <p className="project-title">{project.title}</p>
                  <p className="project-type">{project.type}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
    
    return (
      <div id="my-project-card-list">
        {
          projects.map(project => {
            return(
              <div className="project-card my-project" onClick={this.props.selectProject}>
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