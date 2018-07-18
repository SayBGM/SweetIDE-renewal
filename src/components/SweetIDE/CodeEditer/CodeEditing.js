import React from 'react';
import { connect } from 'react-redux';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { changeSweetCode } from '../../../core/redux/actions/tabsAction';
import './css/CodeMirror.scss';


class CodeEditing extends React.Component{
  render(){
    return (
      <div className="CodeEditing" style={{height:'calc(100% - 40px)'}}>
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
    const Editers = this.props.tabReducer.Tabs;
    return Editers.map((Editer, index) => {
        if(this.props.tabReducer.isOpen === index){
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
  }
}

function mapStateToProps(state) {
  return{
    tabReducer : state.tabReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeSweetCode: (SelectTab, changedCode) => dispatch(changeSweetCode(SelectTab, changedCode))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditing);