import React from 'react';
import Icon from './../../basicComponent/Icons';
import FileList from './FileList';

import './css/Explore.scss';

export default class Explore extends React.Component{
  render(){
    return (
      <div className="IDE__contants__Explore">
        <div className="IDE__contants__Explore__Title">
          <Icon icon="folder-open" fontsize="20px" margin="5px"/> 프로젝트 파일
          <span className="IDE__contants__Explore__Title__Close"><Icon icon="times" fontsize="15px"/></span>
        </div>
        <FileList />
      </div>
    );
  }
}