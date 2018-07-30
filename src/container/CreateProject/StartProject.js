import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './css/StartProject.scss';
import {getPortList} from '../../core/redux/actions/projectAction';
import ToastUtils from '../../core/utils/toaster/ToastUtils';

class StartProject extends React.Component{
  constructor(){
    super();
    this.state = {
      inProcess: false,
    }
  }
  render(){
    return (
      <div className="select-section">
        <p className="select-title">'실행하기' 버튼을 눌러 클라이언트를 실행시켜주세요<br/></p>
        <p className="select-subtitle">※ 클라이언트 실행 전, <strong>SweetBoard와 연결을 반드시 해제</strong>해주세요</p> 
        <div className="select-item-wrapper">
        <div>
          아마 석-민이 만든 애니메이션 들어갈 자리
        </div>
        <div className="SweetClient-start" onClick={()=> this.inputList()}>{this.state.inProcess ? '2. 포트설정' : <a href="sweetfab://">1. 실행하기</a>}</div>
        </div>
      </div>
    )
  }
  inputList() {
    if(!this.state.inProcess){
      this.setState({inProcess: true});
      return;
    }
    axios.get('http://localhost:1601/').then(res => {
      if(res.data === 'SweetFab'){
        axios.get('http://localhost:1601/local/getportlist/').then(res => {
          this.props.getPortList(res.data.com);
          console.log(res.data.com);
          return;
        })
      }
      else {
        ToastUtils.showErrorToast('SweetClient가 꺼져있습니다.<br/> 다시 한번 <strong>\'실행하기\'</strong>버튼을 눌러주세요.');
        this.setState({inProcess: false});
      }
    }).catch(err => {
      ToastUtils.showErrorToast('SweetClient가 꺼져있습니다.<br/> 다시 한번 <strong>\'실행하기\'</strong>버튼을 눌러주세요.');
      this.setState({inProcess: false});
    })
  }
}

function mapDispatchtoProps(dispatch){
  return {
    getPortList: (list) => dispatch(getPortList(list)),
  }
}

export default connect(null, mapDispatchtoProps)(StartProject)