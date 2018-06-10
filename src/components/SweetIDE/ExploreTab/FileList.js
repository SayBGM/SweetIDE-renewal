import React from 'react';
import { connect } from 'react-redux';
import File from './File';

class FileList extends React.Component{
  render(){
    const RenderDirectory = this.props.directory.map((file, index) => {
      return <File key={index} name={file.filename} code={file.code} />
    })
    return (
      <div className="IDE__contants__Explore__FileList">
        {RenderDirectory}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    directory : state.directoryReducer
  }
}

export default connect (mapStateToProps)(FileList);