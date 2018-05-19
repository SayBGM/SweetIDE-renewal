import React from 'react';
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import IdeNavigator from '../../components/basicComponent/IdeNavigator'
import ExploreBar from '../../components/ExploreBar/ExploreBar'
import CodeEditing from '../../components/CodeEditing/CodeEditing'
import './SweetIDE.css';

class SweetIDE extends React.Component {
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

SweetIDE.Proptypes = {
  projectName: Proptypes.string.isRequired,
  userName: Proptypes.string.isRequired
}

function mapStateToProps(state){
  return{
    projectName: state.projectReducer.projectName,
    userName: state.userReducer.userName
  }
}

export default connect(mapStateToProps)(SweetIDE)