import React from 'react';
import socketIOClient from 'socket.io-client';
import Icons from './../basicComponent/Icons';
import './css/SeiralMoniter.css'

export default class SeiralMoniter extends React.Component{
  constructor(){
    super();
    this.state = {
      endpoint : "ws:localhost/websocket/",
    };
  }
  render(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('Seiral Console', (text) => {
    })
    return (
      <div className="SeiralMoniter" style={{display:'inline-block', width : 'calc(100% - 410px)', height : '40vh', border:'solid 0.3px #979797'}}>
        <Icons icon="desktop" margin='5px'/>시리얼 모니터
      </div>
    )
  }
}