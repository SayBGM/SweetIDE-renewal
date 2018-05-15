import React from 'react';
import CodeMirrorCPP from './CodeMirrorCPP'
import EditingContainer from './EditingContainer'

export default class CodeEditing extends React.Component{
  render(){
    return (
      <EditingContainer>
        <CodeMirrorCPP />
      </EditingContainer>
    )
  }
}