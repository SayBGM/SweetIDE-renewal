import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { connect } from 'react-redux';
import { changeSweetCode } from './../../../core/redux/actions/codeActions';


import './css/editorFont.css';
import './css/hint.css';

class CodeMirrorCPP extends React.Component {
  render() {
      return (
      <div style={{border: 'solid 1px #979797'}}>
        <CodeMirror
            value={this.props.codeInfo[this.props.SelectTab].code} 
            onChange={(editer, data, value) => {this.props.changeSweetCode(value)}}
            options={{
                lineNumbers: true,
                matchBrackets:true,
                lineWrapping: true,
                smartIndent: true,
                tabSize: 4,
                indentUnit: 4,
                indentWithTabs: true,
                theme: "idea",
                mode: 'cpp'
            }}
        />
    </div>)
}
}
function mapStateToProps(state) {
    return{
        codeInfo : state.tabReducer.Tabs
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeSweetCode: (changedCode) => dispatch(changeSweetCode(changedCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeMirrorCPP);