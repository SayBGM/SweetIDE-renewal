import React from 'react';
import { connect } from 'react-redux';
import Folder from './FileList/Folder';
import './css/ProjectDirectory.css';

class ProjectDirectory extends React.Component{
  render(){
    const Directory = this.props.Directory.map((folder) => {
      return <Folder folder={folder} key={folder.name}/>
    })
    return (
      <div className="Directory">
        {Directory}
      </div>
    )
  }
}

function mapStatetoProps(state){
  return{
    Directory: state.directoryReducer
  }
}

export default connect(mapStatetoProps)(ProjectDirectory)