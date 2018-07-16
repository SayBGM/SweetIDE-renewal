import React from 'react';
import './css/LibrayList.scss';

export default class LibrayList extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    return (
      <div className="LibrayList">
        {this.renderOModule()}
        {this.renderIModule()}
      </div>
    )
  }
  renderIModule() {
    return this.state.InputModule.map(IModule => {
      return <div className="LibrayList__Module --Imodule --close" key={IModule.name} onClick={()=> console.log(IModule.libray)}>{IModule.name}</div>
    })
  }
  renderOModule() {
    return this.state.OutModule.map(OModule => {
      return <div className="LibrayList__Module --Omodule --close" key={OModule.name} onClick={()=> console.log(OModule.libray)}>{OModule.name}</div>
    })
  }
}