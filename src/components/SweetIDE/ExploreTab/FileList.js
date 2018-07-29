import React from 'react';
import Icon from './../../basicComponent/Icons';
import { connect } from 'react-redux';
import { directoryFileAdd, directoryFileRemove } from './../../../core/redux/actions/directoryAction'
import File from './File';

class FileList extends React.Component{
  render(){
    const RenderDirectory = _ => {
      return this.props.directory.map((file, index) => {
        return <File key={index} name={file.filename} code={file.code} />
    })
  }
    
    return (
      <div className="IDE__contants__Explore__FileList">
        {RenderDirectory()}
        <div className={this.props.addFile ? 'IDE__contants__Explore__FileList__addFile--open' : 'IDE__contants__Explore__FileList__addFile--close'}>
          <span className="IDE__contants__Explore__FileList__addFile--open__Icon"><Icon icon="file" margin="5px" fontsize="14px"/></span>
          <input
            type="text"
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                this.props.directoryFileAdd(e.target.value)
                this.props.toggleInput()
              }
            }}
            id="addFileInput" 
            ref={input => input && input.focus()}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    directory : state.directoryReducer.directory
  }
}

function mapDispatchToProps (dispatch){
  return {
    directoryFileAdd: (filename) => dispatch(directoryFileAdd(filename)),
    directoryFileRemove: (deleteIndex) => dispatch(directoryFileRemove(deleteIndex)),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(FileList);