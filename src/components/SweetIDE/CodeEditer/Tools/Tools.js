import React, { Component } from 'react';
import axios from 'axios';
import Icon from './../../../basicComponent/Icons';
import ToastUtils from '../../../../core/utils/toaster/ToastUtils';
import { connect } from 'react-redux';
import './css/Tools.scss';
import {getPortList, changePortNumber} from '../../../../core/redux/actions/projectAction';

class Tools extends Component {
  render() { 
    return ( 
      <div className="Tools">
        <div className="Tools__box">
          <div className="Tools__box__tool --sirial"><Icon icon="desktop" size="20px"/></div>
          <div className="Tools__box__tool --tool" onClick={()=> this._CheckPort()}><Icon icon="toolbox" size="20px"/></div>
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
  _CheckPort() {
    let Originportlist = this.props.projectReducer.portlist;
    ToastUtils.showInfoToast("SweetBoard 포트를 체크하는 중입니다...");
      axios.get('http://localhost:1601/local/getportlist/').then(res => {
        let portlist = res.data.com;
        if(Originportlist.length >= portlist.length){
          this.props.getPortList(portlist);
          ToastUtils.showErrorToast('SweetBoard를 꽂아주세요.<br/>이미 꽂혀있다면 빼신 후 새로고침(F5)을 해주세요.');
          this.props.changePortNumber('');
          return;
        } else if(Originportlist.length+1 === portlist.length || this.props.projectReducer.port){
          this.props.changePortNumber(portlist[portlist.length-1]);
          this.props.getPortList(portlist);
          axios.post('http://localhost:1601/local/setport/',{
            com: portlist[portlist.length-1]
          }).then(res => {
            if(res.status === 400 & res.data.reason === 1){
              ToastUtils.showErrorToast('SweetBoard를 꽂아주세요.<br/>');
              return;
            } else if(res.status === 400 & res.data.reason === 2){
              ToastUtils.showErrorToast('지원하지 않는 작업입니다. SweetIDE에 문의 바랍니다.');
              return;
            } else if(res.status === 409 & res.data.reason === 3){
              ToastUtils.showErrorToast('다른 프로그램에 의해 포트가 사용중입니다.<br/> 해당 프로그램을 종료해주세요.');
              return;
            } else if(res.status === 409 & res.data.reason === 4){
              ToastUtils.showErrorToast('포트의 입출력 에러입니다. SweetIDE에 문의 바랍니다.');
              return;
            }
          })
          ToastUtils.showSuccessToast('SweetBoard의 포트가 확인되었습니다.');
          return;
        } else if(Originportlist.length+1 < portlist.length){
          this.props.getPortList(portlist);
          ToastUtils.showErrorToast('SweetBoard를 연결 해제 후 다시 보드확인 도구를 실행해주세요.');
        } else {
          ToastUtils.showErrorToast('클라이언트가 꺼져있습니다.<br/> 클라이언트 재실행이 필요합니다.<br/> <a href="sweetfab://">실행하기</a>');
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