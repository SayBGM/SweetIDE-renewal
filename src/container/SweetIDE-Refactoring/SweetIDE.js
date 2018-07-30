import React from 'react';
import axios from 'axios';
import Fullscreen from 'react-full-screen';
import Navigation from './../../components/SweetIDE/BasicComponents/Navigation';
import Explore from './../../components/SweetIDE/ExploreTab/Explore';
import LibraryTab from './../../components/SweetIDE/LibraryTab/LibrayTab';
import CodeEditer from './../../components/SweetIDE/CodeEditer/CodeEditer';
import './SweetIDE.scss';
import ToastUtils from '../../core/utils/toaster/ToastUtils';

export default class SweetIDE extends React.Component{
  constructor(){
    super();

    this.state = {
      isFull: false,
      isProcess: false,
    };
  }
  goFull = () => {
    this.setState({ isFull: true });
  }
  componentDidMount(){
    axios.get('http://localhost:1601/').then(res => {
      if(res.data === "SweetFab"){
        this.setState({isProcess: true});
      } else {
        this.setState({isProcess: false});
        ToastUtils.showErrorToast('아직 클라이언트가 실행되지 않았습니다. "실행하기" 버튼을 한번 더 눌러주세요.');
      }
    })
  }
  render(){
    return(
      <div style={{height:'100%'}}>
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
          <div className="SweetIDE" style={{width:window.screen.width, height:'100%'}}>
            <Navigation />
              <div className="SweetIDE__contants">
                <div style={{float:'left'}}>
                  <Explore />
                  <LibraryTab />
                </div>
                <CodeEditer />
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
}