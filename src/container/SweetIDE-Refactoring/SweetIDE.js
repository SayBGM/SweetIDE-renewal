import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Fullscreen from 'react-full-screen';
import Navigation from './../../components/SweetIDE/BasicComponents/Navigation';
import Explore from './../../components/SweetIDE/ExploreTab/Explore';
import LibraryTab from './../../components/SweetIDE/LibraryTab/LibrayTab';
import CodeEditer from './../../components/SweetIDE/CodeEditer/CodeEditer';
import './SweetIDE.scss';
import ToastUtils from '../../core/utils/toaster/ToastUtils';
import {getPortList} from '../../core/redux/actions/projectAction';

class SweetIDE extends React.Component{
  constructor(){
    super();

    this.state = {
      isFull: false,
      isProcess: false,
      socket: new WebSocket('ws://localhost:1601/local/serial/')
    };
  }
  goFull = () => {
    this.setState({ isFull: true });
  }
  componentDidMount(){
    axios.get('http://localhost:1601/').then(res => {
      if(res.data === "SweetFab"){
        this.setState({isProcess: true});
        this.state.socket.onopen = function(event) {
          console.log('WebSocket is connected.');
        };
        axios.get('http://localhost:1601/local/getportlist/').then(res => {
          if(res.status === 200){
            this.props.getPortList(res.data.com);
            return;
          }
          ToastUtils.showErrorToast('포트가 잡히지 않습니다. 재실행을 권장합니다.');
          return;
        })
      } else {
        this.setState({isProcess: false});
        ToastUtils.showErrorToast('클라이언트가 실행되지 않았습니다.<br/>"실행하기" 버튼을 눌러주세요.');
      }
    }).catch(res => {
      ToastUtils.showErrorToast('클라이언트가 실행되지 않았습니다.<br/>"실행하기" 버튼을 눌러주세요.');
    })
  }
  render(){
    const {isFull, isProcess} = this.state;
    return(
      <div style={{height:'100%'}}>
        {isProcess ? '' : 
          <div className="SweetIDE__Error">
            <span>SweetClient 실행</span>
            <span>원활한 SweetIDE 환경을 구축하기 위해 SweetClient 실행이 필요합니다.<br/> 아래 '실행하기'버튼을 눌러 SweetClient를 실행시켜주세요.</span>
            <a href="sweetfab://">실행하기</a>
            
          </div>
        }
        <Fullscreen enabled={isFull} onChange={isFull => this.setState({isFull})}>
          <div className="SweetIDE" style={{width:window.screen.width, height:'100%'}}>
            <Navigation changeIsFull={this.changeIsFull.bind(this)}/>
              <div className="SweetIDE__contants">
                <div style={{float:'left'}}>
                  <Explore />
                  <LibraryTab />
                </div>
                <CodeEditer socket={this.state.socket}/>
              </div>
          </div>
        </Fullscreen>
        { this.state.isFull ? '' : 
          <div className="fullscreen__alert">
            <span className="fullscreen__alert__text">SweetIDE는 전체화면을 권장합니다.</span> <div onClick={this.goFull} className="fullscreen__alert__btn">전체화면 전환</div>
          </div>
        }
      </div>
    )
  }
  changeIsFull(){
    this.setState({isFull: false})
  }
}

function mapDispatchtoProps(dispatch){
  return {
    getPortList: (portlist) => dispatch(getPortList(portlist)),
  }
}

export default connect(null ,mapDispatchtoProps)(SweetIDE);