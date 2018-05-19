import React from 'react';
import Icons from './../../../core/basicComponent/Icons'
import './css/library_explore.css'

export default class LibraryExplore extends React.Component{
  render(){
    return(
      <div className="LibraryExplore">
        <span className="LibraryExplore__title" style={{marginBottom:"10px"}}><Icons icon="book" margin="7.5px"/>  라이브러리 관리</span>
        <div className="LibraryExplore__Directory">
        ㅁㄴㅇㄹ
        </div>
      </div>
    )
  }
}