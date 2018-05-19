import React from 'react';
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import IdeNavigator from '../core/basicComponent/IdeNavigator'
import ExploreBar from './explore_bar/explore_bar'
import CodeEditing from './CodeEditing/CodeEditing'
import './IDE.css';

class SweetMain extends React.Component {
  render() {
    const {projectName, userName} = this.props
    return (
      <div className="App">
        <IdeNavigator projectName={projectName} userName={userName}/>
        <div className="IDE" style={{height:'calc( 95vh - 25px )'}}>
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

function mapStateToProps(state){
  return{
    projectName: state.projectReducer.projectName,
    userName: state.userReducer.userName
  }
}

export default connect(mapStateToProps)(SweetMain)