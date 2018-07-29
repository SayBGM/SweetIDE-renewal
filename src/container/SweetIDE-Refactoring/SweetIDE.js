import React from 'react';
import Fullscreen from 'react-full-screen';
import Navigation from './../../components/SweetIDE/BasicComponents/Navigation';
import Explore from './../../components/SweetIDE/ExploreTab/Explore';
import LibraryTab from './../../components/SweetIDE/LibraryTab/LibrayTab';
import CodeEditer from './../../components/SweetIDE/CodeEditer/CodeEditer';
import './SweetIDE.scss';

export default class SweetIDE extends React.Component{
  constructor(){
    super();

    this.state = {
      isFull: false,
    };
  }
  goFull = () => {
    this.setState({ isFull: true });
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