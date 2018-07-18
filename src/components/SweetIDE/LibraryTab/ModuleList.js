import React from 'react';
import './css/ModuleList.scss';

export default class ModuleList extends React.Component{
  constructor(){
    super();
    this.state = {
      isInOpen: false,
      isOutOpen: false,
      OutModule: [
        {
          name: "서보모터 모듈",
          libray: "SB_ServoMotor.h",
        },
        {
          name: "DC모터 모듈",
          libray: "SB_DCMotor.h",
        },
        {
          name: "LED 모듈",
          libray: "SB_LED.h",
        },
        {
          name: "LED링 모듈",
          libray: "SB_LEDRing.h",
        },
        {
          name: "릴레이 모듈",
          libray: "SB_RELAY.h",
        },
      ],
      InputModule: [
        {
          name: "버튼 모듈",
          libray: "SB_Button.h",
        },
        {
          name: "로테이션 모듈",
          libray: "SB_Rotation.h",
        },
        {
          name: "충격 센서 모듈",
          libray: "SB_CrashSensor.h",
        },
        {
          name: "화재 센서 모듈",
          libray: "SB_FireSensor.h",
        },
        {
          name: "가스 센서 모듈",
          libray: "SB_GasSensor.h",
        },
        {
          name: "적외선 센서 모듈",
          libray: "SB_IRSensor.h",
        },
        {
          name: "빛 감지 센서 모듈",
          libray: "SB_LightSensor.h",
        },
        {
          name: "인체 센서 모듈",
          libray: "SB_PIRSensor.h",
        },
        {
          name: "온도 센서 모듈",
          libray: "SB_TempSensor.h",
        }
      ]
    }
  };
  render(){
    return(
      <div className="Modules">
        <div className="Modules__title" onClick={()=> this.setState({isInOpen: !this.state.isInOpen})}>{this.state.isInOpen? "▼" : "▶"}<span>입력 모듈</span></div>
        {this.renderOModule()}
        <div className="Modules__title" onClick={()=> this.setState({isOutOpen: !this.state.isOutOpen})}>{this.state.isOutOpen? "▼" : "▶"}<span>출력 모듈</span></div>
        {this.renderIModule()}        
      </div>
    )
  }
  renderOModule() {
    return this.state.InputModule.map(IModule => {
      return <div className={`Modules__Module --M${this.state.isInOpen}`} key={IModule.name} onClick={()=> console.log(IModule.libray)}>{IModule.name}</div>
    })
  }
  renderIModule() {
    return this.state.OutModule.map(OModule => {
      return <div className={`Modules__Module --M${this.state.isOutOpen}`} key={OModule.name} onClick={()=> console.log(OModule.libray)}>{OModule.name}</div>
    })
  }
}