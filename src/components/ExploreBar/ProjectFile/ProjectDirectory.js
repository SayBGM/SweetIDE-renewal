import React from 'react';
import { connect } from 'react-redux';
import Folder from './FileList/Folder';
import File from './FileList/File';
import './css/ProjectDirectory.css';

class ProjectDirectory extends React.Component{
  render(){
    const Directory = this.props.Directory.map((file) => {
      if(file.isFile){
        return <File file={file.filename} key={file.filename}/>
      }
      else{
        return <Folder folder={file} key={file.name}/>
      }
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