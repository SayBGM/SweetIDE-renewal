import React from 'react';
import MainImg from './../../assets/image/main/main.png';
import './css/MainExplain.css';

export default class MainExplain extends React.Component{
  render(){
    return(
      <div className="Main-Explain" style={{backgroundImage: `url(${MainImg})`, backgroundSize: window.screen.width, width:window.screen.width, height:window.screen.width*0.6625}}>
        <div className="Main-wrapper">
          <div className="Main-Explain-contants">
            <div className="Main-Explain-contants-Rectangle">
            </div>
            <div>
              <div className="Main-Explain-contants-Title">#SWEET IDE</div>
              <div style={{lineHeight:'1.75'}}>SWEET IDE는 <span className="Main-Explain-contants-highlight"> 웹 기반의 클라우드 통합 개발 환경으로,</span> <br/>
              SWEET FAB에서 개발한 소프트웨어 교육을 목표로하는 하드웨어 플랫폼인 <br/>
              <span className="Main-Explain-contants-highlight">SWEET BOARD에 최적화된 개발 환경과</span><br/>
              소프트웨어 지원 및 다수 기능들을 제공합니다.</div>
            </div>
            <div className="Main-Explain-startbtn">
              시작하기
            </div>
          </div>
        </div>
      </div>
    )
  }
}