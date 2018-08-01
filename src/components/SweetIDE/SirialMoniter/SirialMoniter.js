import React from 'react';
import Icons from '../../basicComponent/Icons';
import './css/SirialMoniter.scss';

class SirialMoniter extends React.Component {
  constructor(){
    super();
    this.state={
      msgs: []
    }
  }
  componentDidUpdate() {
    const objDiv = document.getElementById('SiralMoniterContents');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  componentDidMount(){
    const {socket} = this.props;
    socket.onmessage = (event) => {
      console.log(event.data);
      this.setState({msgs:  this.state.msgs.concat([ event.data ])})
    }
  };
  render() { 
    return (
      <div className="SirialMoniter" style={{width:window.screen.width*0.8,height:(window.screen.height-80)/2}}>
        <span className="SirialMoniter__title"><Icons icon="desktop" size="20px" margin="5px"/><span className="SirialMoniter__title--text">시리얼 모니터</span></span>
        <span className="SirialMoniter__close" onClick={()=>this.props.ChangeSirial()}><Icons icon="times" size="30px"/></span>
        <div className="SirialMoniter__contents" id="SiralMoniterContents">
          {this.RenderMsg()}
        </div>
      </div>
    );
  }
  RenderMsg(){
    const {msgs} = this.state;
    return msgs.map(msg => {
      return (
        <p class="SirialMoniter__contents__msg">{msg}</p>
      )
    })
  }
  
}
 
export default SirialMoniter;