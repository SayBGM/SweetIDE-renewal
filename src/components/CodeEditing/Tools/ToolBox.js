import React from 'react';
import Tool from './Tool';
import './css/ToolBox.css'

export default class ToolBox extends React.Component{
  render(){
    return (
      <div className="Tools" >
        <div className="ToolBox">
         <Tool tool="toolbox" toolname="boardcheck"/>
        </div>
        <div className="ToolBox">
          <Tool tool="bolt" toolname="boardcheck"/>
          <div style={{marginRight:'10px'}}/>
          <Tool tool="upload" toolname="boardcheck"/>
        </div>
        <div className="ToolBox" style={{borderRight:'solid 0.3px #979797'}}>
          <Tool tool="share-alt"/>
          <div style={{marginRight:'10px'}}/>
          <Tool tool="download"/>
        </div>
      </div>
    )
  }
}