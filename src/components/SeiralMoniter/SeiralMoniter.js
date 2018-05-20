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
    /*const socket = socketIOClient(this.state.endpoint);
    socket.on('Seiral Console', (text) => {
      document.getElementById("panel").innerHTML(text+"<br/>");
    })*/
    return (
      <div className="SeiralMoniter">
        <div style={{display:'flex', width:'100%', marginBottom:'10px',  alignItems:'center'}}>
          <Icons icon="desktop" margin='5px'/>
          시리얼 모니터
        </div>
        <div id="panel" className="SeiralMoniter__panel">
        </div>
      </div>
    )
  }
}