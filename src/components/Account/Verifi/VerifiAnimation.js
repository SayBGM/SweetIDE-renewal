import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/Lottie/Verifi.json';
import './css/VerifiAnimation.css';

export default class VerifiAnimation extends React.Component{
  
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData
    }
    return (
      <div className="Verifi-Animation">
          <Lottie 
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={500}
          />
        </div>
    )
  }
}