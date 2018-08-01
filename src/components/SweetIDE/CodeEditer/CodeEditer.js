import React from 'react';
import { connect } from 'react-redux';
import Icon from './../../basicComponent/Icons';
import CodeEditing from './CodeEditing';
import Tools from './Tools/Tools';
import './css/CodeEditer.scss';
import { EditingTabAdd, EditingTabRemove, EditingTabChange } from '../../../core/redux/actions/tabsAction';
import {directoryCodeChange} from '../../../core/redux/actions/directoryAction';
import SirialMoniter from '../SirialMoniter/SirialMoniter';


class CodeEditer extends React.Component{
  constructor(){
    super();
    this.state = {
      isOpen: false,
      SirialOpen: false,
    };
  }
  render(){
    const {SirialOpen} = this.state;
    const {socket} = this.props;
    return(
      <React.Fragment>
        <div className="CodeEditer" style={{width:window.screen.width*0.8,height:SirialOpen ? (window.screen.height-80) / 2:(window.screen.height-70)}}>
          <div className="CodeEditer__topbox">
              {this.renderTabbox()}
              <Tools ChangeSirial={this.ChangeSirial.bind(this)} onSirial={this.onSirial.bind(this)}/>
          </div>
          <CodeEditing isOpen={this.props.tabReducer.isOpen} />
        </div>
        {SirialOpen ? 
          <SirialMoniter socket={socket} ChangeSirial={this.ChangeSirial.bind(this)}/>
          : ''}
      </React.Fragment>
    )
  }
  ChangeSirial() {
    this.setState({SirialOpen: !this.state.SirialOpen});
  }
  onSirial(){
    this.setState({SirialOpen: true});
  }
  renderTabbox() {
    const Tabs = this.props.tabReducer.Tabs;
    const SelectTab = this.props.tabReducer.isOpen;
    return Tabs.map((tab, index) => {
      return (
      <div className={SelectTab === index ?"CodeEditer__topbox__Tabs --open" : "CodeEditer__topbox__Tabs --close"}
      key={index} onClick={() => this.props.EditingTabChange(index)}>
        <span className="CodeEditer__topbox__Tabs__name"><Icon icon="file" size="20px" margin="8px"/>{tab.name}</span>
        <div className="CodeEditer__topbox__Tabs__btn" 
        onClick={
          ()=> {this.props.EditingTabRemove(index)
            this.props.directoryCodeChange(tab.name, tab.code)
          }}>
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
    EditingTabChange: (SelectTab) => dispatch(EditingTabChange(SelectTab)),
    directoryCodeChange: (name, code) => dispatch(directoryCodeChange(name, code)),
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CodeEditer);