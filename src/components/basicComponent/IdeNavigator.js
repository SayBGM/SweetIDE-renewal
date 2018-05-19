import React, {Component} from 'react';
import './css/IdeNavigator.css'

export default class IdeNavigator extends Component{
  render(){
    return (
      <div className={'ideNavigator'}>
        <span className={'ideNavigator__Exit'} style={{position: 'absolute', left: '2.5%', fontSize:'16px'}}>나가기</span>
        <span className={'ideNavigator__ProjectName'}>{this.props.projectName}</span>
        <span className={'ideNavigator__UserName'} style={{position: 'absolute', right: '2.5%', fontSize:'16px'}}>{this.props.userName}</span>
      </div>
    )
  }
}