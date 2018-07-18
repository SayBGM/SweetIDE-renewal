import React from 'react';
import Icon from './../../basicComponent/Icons';
import LibrayList from './LibrayList';
import './css/LibrayTab.scss';

export default class LibrayTab extends React.Component{
  constructor(){
    super();
    this.state = {
      isAddOpen: false,
    }
  }
  render(){
    return (
      <div className="LibrayTab" style={{width:window.screen.width*0.175,height:(window.screen.height-80)*0.5}}>
        <div className="LibrayTab__title">
          <span className="LibrayTab__title__icon"><Icon icon="folder-open" fontsize="20px"  margin="5px"/></span>
          <span className="LibrayTab__title__contants">라이브러리 관리</span>
          <div className="LibrayTab__title__plus" onClick={()=> {this.setState({isAddOpen: !this.state.isAddOpen})}}>+</div>
        </div>
        <LibrayList isAddOpen={this.state.isAddOpen}/>
      </div>
    );
  }
}