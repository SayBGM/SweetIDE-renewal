import React, { Component } from 'react';
import axios from 'axios';
import Icon from './../../../basicComponent/Icons';
import ToastUtils from '../../../../core/utils/toaster/ToastUtils';
import { connect } from 'react-redux';
import './css/Tools.scss';
import {getPortList, changePortNumber} from '../../../../core/redux/actions/projectAction';

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
  _CheckBoard() {
    ToastUtils.showInfoToast("SweetBoard 포트를 체크하는 중입니다...");
    axios.get('http://localhost:1601/').then(res => {
      if(res.data === 'SweetFab'){
        axios.get('http://localhost:1601/local/getportlist/').then(res => {
          ToastUtils.showSuccessToast('SweetBoard의 포트가 확인되었습니다.');
          return;
        })
      }
      else {
        ToastUtils.showErrorToast('SweetClient가 꺼져있습니다.');
      }
    })
  }
}
 
function mapStatetoProps(state){
  return {
    projectReducer: state.projectReducer
  }
}

function mapDispatchtoProps(dispatch){
  return {
    getPortList: (portlist) => dispatch(getPortList(portlist)),
    changePortNumber: (portName) => dispatch(changePortNumber(portName)),
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Tools);