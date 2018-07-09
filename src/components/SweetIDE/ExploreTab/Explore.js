import React from 'react';
import Icon from './../../basicComponent/Icons';
import FileList from './FileList';

import './css/Explore.scss';

export default class Explore extends React.Component{
  constructor(){
    super()
    this.state = { isaddFileOpen: false }
  }
  render(){
    return (
      <div className="IDE__contants__Explore" style={{width:window.screen.width*0.175, height:window.screen.height*0.4}}>
        <div className="IDE__contants__Explore__Title">
          <Icon icon="folder-open" fontsize="20px" margin="5px"/> 프로젝트 파일
          <span className="IDE__contants__Explore__Title__Plus" onClick={_ => this.toggleInput()}><Icon icon="plus" fontsize="15px"/></span>
          <span className="IDE__contants__Explore__Title__Close"><Icon icon="times" fontsize="15px"/></span>
        </div>
        <FileList addFile={this.state.isaddFileOpen} toggleInput={this.toggleInput.bind(this)}/>
      </div>
    );
  }
  toggleInput(){
    this.setState({isaddFileOpen: !this.state.isaddFileOpen})
    document.getElementById("addFileInput").value = "";
  }
}