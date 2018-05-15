import React from 'react';
import CodeMirror from 'codemirror';
import {connect} from 'react-redux';
import {changeSweetCode} from './../../core/redux/actions/codeActions';


import './css/editorFont.css';
import './css/hint.css';

class CodeMirrorCPP extends React.Component {

  componentDidMount() {
      const codeMirror = this._createCodeMirror();
      this._bindEvents(codeMirror);
  }

  //코드미러 오브젝트를 생성한다 (브라우저에도 렌더링시킴)
  _createCodeMirror() {
      const editer = document.getElementById('codeEditor');
      const codeMirror = CodeMirror.fromTextArea(editer, {
          lineNumbers: true,
          matchBrackets:true,
          lineWrapping: true,
          smartIndent: true,
          tabSize: 4,
          indentUnit: 4,
          indentWithTabs: true,
          theme: "idea",
          mode: 'cpp'
          //mode: 'text/x-csrc'
      });
      return codeMirror;
  }

  //코드미러 이벤트들을 등록한다.
  _bindEvents(codeMirror){
      const { dispatch } = this.props;
      //코드에 변동이 있을 경우 호출할 함수 지정
      codeMirror.on('change', (instance, obj) => {
          console.log('obj: ' + JSON.stringify(obj));
          dispatch(changeSweetCode(codeMirror.getValue())); //redux
      });
  }

  render() {
      return <textarea id='codeEditor' className={'lined nanumGothicCoding'} rows='100' cols='100'/>
  }
}

function updateCode(store) {
  return {
      store: store
  };
}

export default connect(updateCode)(CodeMirrorCPP);