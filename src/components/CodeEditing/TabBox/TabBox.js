import React from 'react';
import { connect } from 'react-redux';
import { EditingTabRemove, EditingTabChange } from './../../../core/redux/actions/tabsAction';
import Icons from '../../basicComponent/Icons';

import './Tabbox.css';

class TabBox extends React.Component{
  render(){
    return (
      <div className={`Tabbox TabBox--${this.props.isEdit}`} onClick={_ => this.props.EditingTabChange(this.props.index)}>
        <div className={'Tabbox__content'} >
        <Icons icon={'file'} fontsize="18px" margin="7px"/>
        <span>{this.props.fileName}</span>
        </div>
        <span className='close' onClick={_ => this.props.EditingTabRemove(this.props.index)}><Icons icon={'times'}/></span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    EditingTabChange : (SelectTab) => {dispatch(EditingTabChange(SelectTab))},
    EditingTabRemove : (SelectTab) => {dispatch(EditingTabRemove(SelectTab))}
  }
}

export default connect (null, mapDispatchToProps)(TabBox);