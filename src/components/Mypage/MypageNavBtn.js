import React from 'react';
import './css/mypageNav.css';

const MypageNavBtn = ({ isSelected, text, handelClickEevent, index }) => {
  const renderSelectedLine = _ => {
    if(isSelected) return <div className="selected-nav-btn"></div>
  }

  return (
    <div className="mypage-nav-btn" onClick={ _ => handelClickEevent(index) }>
      {text}
      {renderSelectedLine()}
    </div>
  )
}

export default MypageNavBtn;