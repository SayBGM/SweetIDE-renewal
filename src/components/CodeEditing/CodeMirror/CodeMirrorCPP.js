import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { connect } from 'react-redux';
import { changeSweetCode } from './../../../core/redux/actions/tabsAction';

import './css/editor.css';
import './css/hint.css';

class CodeMirrorCPP extends React.Component {
  render() { 
      // value때문인지는 모르겠으나 계속 커서가 뒤로 간다.
    return (
      <div style={{border: 'solid 1px #979797'}}>
        {this.renderCodeMirror()}
        </div>
    )
}
    renderCodeMirror = () =>{
        const setting = {
            lineNumbers: true,
            matchBrackets:true,
            lineWrapping: true,
            smartIndent: true,
            tabSize: 4,
            indentUnit: 4,
            indentWithTabs: true,
            theme: "idea",
            mode: 'cpp'
        }
        const Editers = this.props.codeInfo;
        console.log(Editers)
        return Editers.map((Editer, index) => {
            if(this.props.SelectTab === index){
                return (
                    <div id={`CodeMirrorEditer-index${index}`} className={`CodeMirror CodeMirrorEditer-open`} key={index}>
                        <CodeMirror
                            value={Editer.initialcode} 
                            onChange={(editer, data, value) => {this.props.changeSweetCode(this.props.SelectTab, value)}}
                            options={setting}
                        />
                    </div>
                )
            }
            else{
                return (
                    <div id={`CodeMirrorEditer-index${index}`} className={`CodeMirror CodeMirrorEditer-close`} key={index}>
                        <CodeMirror
                            value={Editer.initialcode} 
                            onChange={(editer, data, value) => {this.props.changeSweetCode(this.props.SelectTab, value)}}
                            options={setting}
                        />
                    </div>
                )
            }  
        })
        return;
    }
}
function mapStateToProps(state) {
    return{
        codeInfo : state.tabReducer.Tabs
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeSweetCode: (SelectTab, changedCode) => dispatch(changeSweetCode(SelectTab, changedCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeMirrorCPP);