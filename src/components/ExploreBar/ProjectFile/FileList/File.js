import React from 'react';
import { connect } from 'react-redux';
import { EditingTabAdd } from './../../../../core/redux/actions/tabsAction';
import Icons from './../../../basicComponent/Icons';

class File extends React.Component{
  render(){
    return (
      <div className={`${this.props.highfolder}-File File`} style={{marginLeft:'5px', cursor:'pointer'}} >
        <span onDoubleClick={_ => this.props.EditingTabAdd(this.props.file, this.props.code)}><Icons icon="file-code" margin="4px" fontsize="20px"/>{this.props.file}</span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    EditingTabAdd : (filename, code) => dispatch(EditingTabAdd(filename, code))
  }
    
}

export default connect(null, mapDispatchToProps)(File);