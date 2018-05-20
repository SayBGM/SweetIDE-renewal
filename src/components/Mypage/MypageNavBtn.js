import React from 'react';
import Proptypes from 'prop-types';
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

MypageNavBtn.Proptypes = {
  isSelected: Proptypes.bool.isRequired,
  text: Proptypes.text.isRequired,
  handelClickEevent: Proptypes.func.isRequired,
  inde: Proptypes.number.isRequired
}

export default MypageNavBtn;