import React, { Component } from 'react';
import Icon from './../../../basicComponent/Icons';
import './css/Tools.scss';

class Tools extends Component {
  constructor() {
    super();
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="Tools">
        <div className="Tools__box">
          <div className="Tools__box__tool --sirial"><Icon icon="desktop" size="20px"/></div>
          <div className="Tools__box__tool --tool"><Icon icon="toolbox" size="20px"/></div>
        </div>
        <div className="Tools__box">
          <div className="Tools__box__tool --build"><Icon icon="bolt" size="20px"/></div>
          <div className="Tools__box__tool --upload"><Icon icon="upload" tsize="20px"/></div>
        </div>
        <div className="Tools__box">
          <div className="Tools__box__tool --share"><Icon icon="share-alt" tsize="20px"/></div>
          <div className="Tools__box__tool --download"><Icon icon="download" tsize="20px"/></div>
        </div>
      </div>
    );
  }
}
 
export default Tools;