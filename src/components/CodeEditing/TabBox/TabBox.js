import React from 'react';
import Icons from '../../basicComponent/Icons';

import './Tabbox.css';

export default class TabBox extends React.Component{
  render(){
    return (
      <div className={`Tabbox TabBox--${this.props.isEdit}`} onClick={_ => this.props.handelTabClickEevent(this.props.index)}>
        <div className={'Tabbox__content'} >
        <Icons icon={'file'} fontsize="20px" margin="10px"/>
        <span>{this.props.fileName}</span>
        </div>
        <span className='close'><Icons icon={'times'}/></span>
      </div>
    )
  }
}