import React from 'react';
import Icons from './../../../basicComponent/Icons';

export default class File extends React.Component{
  render(){
    return (
      <div className="File" style={{marginLeft:'5px'}}>
        <span><Icons icon="file-code" margin="4px"/>{this.props.file}</span>
      </div>
    )
  }
}