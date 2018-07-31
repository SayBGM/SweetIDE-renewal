import React from 'react';
import Icons from '../../basicComponent/Icons';
import './css/SirialMoniter.scss';

class SirialMoniter extends React.Component {
  componentDidMount(){
    const {socket} = this.props;
    socket.onmessage = function(event){
      const moniter = document.getElementById('SiralMoniterContents');
      moniter.innerText(`<p class="SirialMoniter__contents__msg">${event.data}</p>`)
    }
  };
  render() { 
    return (
      <div className="SirialMoniter" style={{width:window.screen.width*0.8,height:(window.screen.height-80)/2}}>
        <span className="SirialMoniter__title"><Icons icon="desktop" size="20px" margin="5px"/><span className="SirialMoniter__title--text">시리얼 모니터</span></span>
        <span className="SirialMoniter__close" onClick={()=>this.props.ChangeSiral()}><Icons icon="times" size="30px"/></span>
        <div className="SirialMoniter__contents" id="SiralMoniterContents">
          
        </div>
      </div>
    );
  }
}
 
export default SirialMoniter;