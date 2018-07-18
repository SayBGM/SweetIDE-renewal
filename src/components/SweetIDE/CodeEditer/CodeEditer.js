import React from 'react';
import { connect } from 'react-redux';
import Icon from './../../basicComponent/Icons';
import './css/CodeEditer.scss';
import './css/codemirror.css';
import CodeEditing from './CodeEditing';
import { EditingTabAdd, EditingTabRemove, EditingTabChange } from '../../../core/redux/actions/tabsAction';

class CodeEditer extends React.Component{
  constructor(){
    super();
    this.state = {
      isOpen: false,
    };
  }
  render(){
    return(
      <div className="CodeEditer" style={{width:window.screen.width*0.8,height:(window.screen.height-70)}}>
        <div className="CodeEditer__topbox">
            {this.renderTabbox()}
        </div>
        <CodeEditing isOpen={this.state.isOpen} />
      </div>
    )
  }
  renderTabbox() {
    const Tabs = this.props.tabReducer.Tabs;
    const SelectTab = this.props.tabReducer.isOpen;
    return Tabs.map((tab, index) => {
      return (
      <div className={SelectTab === index ?"CodeEditer__topbox__Tabs --open" : "CodeEditer__topbox__Tabs --close"}
      key={index} onClick={() => this.props.EditingTabChange(index)}>
        <span className="CodeEditer__topbox__Tabs__name"><Icon icon="file" size="20px" margin="8px"/>{tab.name}</span>
        <div className="CodeEditer__topbox__Tabs__btn" onClick={()=> this.props.EditingTabRemove(index)}>
          ×
        </div>
      </div>
      )
    })
  }
}


function mapStatetoProps(state) {
  return {
    tabReducer: state.tabReducer,
  }
}

function mapDispatchtoProps(dispatch){
  return {
    EditingTabAdd: (name, code) => dispatch(EditingTabAdd(name, code)),
    EditingTabRemove: (SelectTab) => dispatch(EditingTabRemove(SelectTab)),
    EditingTabChange: (SelectTab) => dispatch(EditingTabChange(SelectTab))
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CodeEditer);