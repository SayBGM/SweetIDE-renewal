import React from 'react';
import { connect } from 'react-redux';
import { EditingTabChange } from './../../../core/redux/actions/tabsAction';
import Icons from '../../basicComponent/Icons';

import './Tabbox.css';

class TabBox extends React.Component{
  render(){
    return (
      <div className={`Tabbox TabBox--${this.props.isEdit}`} onClick={this.props.ChangeTab(this.props.fileName)}>
        <div className={'Tabbox__content'}>
        <Icons icon={'file'} margin="10px"/>
        <span>{this.props.fileName}</span>
        </div>
        <span className='close'><Icons icon={'times'}/></span>
      </div>
    )
  }
}

function mapDispatchtoProps(dispatch){
  return {
    EditingTabChange : (SelectTabName) => dispatch(EditingTabChange(SelectTabName))
  }
}

export default (null, mapDispatchtoProps)(TabBox)