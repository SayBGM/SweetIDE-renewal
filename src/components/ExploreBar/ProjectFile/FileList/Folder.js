import React from 'react';
import Icons from './../../../basicComponent/Icons';
import File from './File'

export default class Folder extends React.Component{
  render(){
    const filedirectory = this.props.folder.subdirectory.map((file) => {
      if(file.isFile){
        return <File file={file.filename} key={file.filename}/>
      }
      else{
        return <Folder folder={file} key={file.name}/>
      }
    })
    return (
      <div className="Folder" style={{marginLeft:'20px'}}>
        <span style={{color:"#777777"}}><Icons icon="folder-open" margin="4px"/></span>{this.props.folder.name}
        {filedirectory}
      </div>
    )
  }
}