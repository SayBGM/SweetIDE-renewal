import React from 'react';
import Icons from './../../../core/basicComponent/Icons';

import './Tabbox.css';

export default class Tabbox extends React.Component{
  render(){
    return (
      <div className={`Tabbox TabBox--${this.props.isEdit}`}>
        <div className={'Tabbox__content'}>
        <Icons icon={'file'} margin="10px"/>
        <span>{this.props.fileName}</span>
        </div>
      </div>
    )
  }
}