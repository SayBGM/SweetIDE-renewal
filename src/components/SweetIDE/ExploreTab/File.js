import React from 'react';
import Icon from './../../basicComponent/Icons';

export default class File extends React.Component{
  render(){
    return (
      <div className="IDE__contants__Explore__FileList__File">
        <Icon icon="file" margin="5px" fontsize="14px"/>
        {this.props.name}
      </div>
    );
  }
}