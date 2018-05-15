import React from 'react';

export default class Icons extends React.Component{
  render(){
    return (
      <i className={`fas fa-${this.props.icon}`} style={{fontSize:'20px', marginRight: '5px'}}/>
    )
  }
  
}
