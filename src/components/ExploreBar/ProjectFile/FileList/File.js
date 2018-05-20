import React from 'react';
import Icons from './../../../basicComponent/Icons';
import Folder from './Folder';

export default class File extends React.Component{
  render(){
    function SubdirectoryFolder (file){
      if(file.filename){
        return <span><Icons icon="file-code" margin="4px"/>{file.filename}</span>
      }
      else{
        return <Folder folder={file} key={file.name}/>
      }
    }
    return (
      <div className="File" style={{marginLeft:'20px'}}>
        {SubdirectoryFolder(this.props.files)}
      </div>
    )
  }
}