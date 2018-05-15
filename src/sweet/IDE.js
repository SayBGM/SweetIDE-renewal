import React, {Component} from 'react';
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import IdeNavigator from '../core/basicComponent/IdeNavigator'
import ExploreBar from './explore_bar/explore_bar'
import CodeEditing from './code_editing/CodeEditing'
import './IDE.css';

class SweetMain extends Component {
  render() {
    const {projectName, userName} = this.props
    return (
      <div className="App">
        <IdeNavigator projectName={projectName} userName={userName}/>
        <div className="IDE">
          <ExploreBar />
          <CodeEditing />
        </div>

      </div>
    )
  }
}

SweetMain.Proptypes = {
  projectName: Proptypes.string.isRequired,
  userName: Proptypes.string.isRequired
}

function navPropsMaping(state){
  return{
    projectName: state.projectInfo.projectName,
    userName: state.userInfo.userName
  }
}

export default connect(navPropsMaping)(SweetMain)