import React, { Component } from 'react';

import Icon from './../../../basicComponent/Icons';
import './css/Tools.scss';
import ToastUtils from '../../../../core/utils/toaster/ToastUtils';
import axios from 'axios';

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
          <div className="Tools__box__tool --tool" onClick={()=> this._CheckBoard()}><Icon icon="toolbox" size="20px"/></div>
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
  _CheckClient() {
    axios.get('http://localhost:1601/').then(res => {
      return true;
    }).catch((error) => {
      return false;
    })
  }
  _CheckBoard() {
    Promise.all([this._CheckClient(), this._CheckBoardPort()]).then((client, boardport)=> {
      if(client && boardport){
        ToastUtils.showSuccessToast('SweetBoard의 포트가 확인되었습니다.');
      } else {
        ToastUtils.showWarningToast('SweetClient가 꺼져있습니다.');
      }
    })
  }
  async _CheckBoardPort() {
    ToastUtils.showInfoToast("SweetBoard 포트를 체크하는 중입니다...");
    axios.get('http://localhost:1601/local/getportlist').then(res => {
      return true;
      }
    ).catch((error) => {
      ToastUtils.showErrorToast('보드가 확인되지 않습니다.');
      return false;
    })}
  }
 

export default Tools;