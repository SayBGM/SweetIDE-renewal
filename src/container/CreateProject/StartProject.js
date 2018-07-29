import React from 'react';
import axios from 'axios';
import './css/StartProject.scss';

class StartProject extends React.Component{
  render(){
    return (
      <div className="select-section">
        <p className="select-title">'실행하기' 버튼을 눌러 클라이언트를 실행시켜주세요<br/></p>
        <p className="select-subtitle">※ 클라이언트 실행 전, <strong>SweetBoard와 연결을 반드시 해제</strong>해주세요</p> 
        <div className="select-item-wrapper">
        <div>
          아마 석-민이 만든 애니메이션 들어갈 자리
        </div>
        
        <div className="SweetClient-start"><a href="sweetfab://">실행하기</a></div>
        </div>
      </div>
    )
  }
}

export default StartProject