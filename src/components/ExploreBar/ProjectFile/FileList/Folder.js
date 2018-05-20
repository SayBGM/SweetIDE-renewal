import React from 'react';
import Icons from './../../../basicComponent/Icons';
import File from './File'

export default class Folder extends React.Component{
  render(){
    const filedirectory = this.props.folder.subdirectory.map((subdirectory) => {
      return <File files={subdirectory} key={subdirectory.filename}/>
    })
    return (
      <div className="Folder">
        <span style={{color:"#777777"}}><Icons icon="folder-open" margin="4px"/></span>{this.props.folder.name}
        {filedirectory}
      </div>
    )
  }
}