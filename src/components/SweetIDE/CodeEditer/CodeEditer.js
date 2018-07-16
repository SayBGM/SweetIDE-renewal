import React from 'react';
import './css/CodeEditer.scss';
import './css/codemirror.css';

export default class CodeEditer extends React.Component{
  render(){
    return (
      <div className="IDE__contants__CodeEditer" style={{width:window.screen.width*0.8,height:(window.screen.height-70)}}>

      </div>
    );
  }
}