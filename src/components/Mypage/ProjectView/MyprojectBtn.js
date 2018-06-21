import React from 'react';
import '../css/projectView.css';

const MyprojectBtn = (props) => {
  return (
    <div className="my-project-btn-wrapper">
      <div className = "filter"></div>
      <span className="my-project-btn" onClick={props.eventHandler}> {props.contents} </span>
    </div>
  )
}

export default MyprojectBtn;