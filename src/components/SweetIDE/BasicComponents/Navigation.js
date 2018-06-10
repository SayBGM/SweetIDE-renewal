import React from 'react';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import './css/Navigation.scss';

class Navigation extends React.Component{
  render(){
    const {projectName, userName} = this.props
    return(
      <div className="IDE__Navigation">
        <span className="IDE__Navigation__Exit">
          나가기
        </span>
        <span className="IDE__Navigation__ProjectName">
          {projectName}
        </span>
        <span className="IDE__Navigation__UserName">
          {userName}
        </span>
      </div>
    )
  }
}

Navigation.Proptype = {
  projectName: Proptype.string.isRequired,
  userName: Proptype.string.isRequired
}

function mapStateToProps(state){
  return{
    projectName: state.projectReducer.projectName,
    userName: state.userReducer.userName
  }
}

export default connect(mapStateToProps)(Navigation)