import React from 'react';
import { connect } from 'react-redux';
import { EditingTabAdd } from './../../../core/redux/actions/tabsAction'
import Icon from './../../basicComponent/Icons';

class File extends React.Component{
  render(){
    return (
      <div className="IDE__contants__Explore__FileList__File" onDoubleClick={_ => this.props.EditingTabAdd(this.props.name, this.props.code)}>
        <Icon icon="file" margin="5px" fontsize="14px"/>
        {this.props.name}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    EditingTabAdd: (filename, code) => dispatch(EditingTabAdd(filename, code))
  }
}

export default connect(null, mapDispatchToProps)(File);