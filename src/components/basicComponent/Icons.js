import React from 'react';

export default class Icons extends React.Component{
  render(){
    return (
      <i id={this.props.id} className={`fas fa-${this.props.icon}`} style={{fontSize:this.props.fontsize, marginRight: this.props.margin}}/>
    )
  }
}
