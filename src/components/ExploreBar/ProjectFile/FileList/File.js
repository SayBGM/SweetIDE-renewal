import React from 'react';
import Folder from './Folder';

export default class File extends React.Component{
  render(){
    function SubdirectoryFolder (file){
      if(file.filename){
        return
      }
      else{
        return <Folder folder={file} />
      }
    }
    return (
      <div className="File" style={{marginLeft:'10px'}}>
        {this.props.files.filename}
        {SubdirectoryFolder(this.props.files)}
      </div>
    )
  }
}