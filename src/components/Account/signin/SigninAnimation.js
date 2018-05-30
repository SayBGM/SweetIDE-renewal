import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/Lottie/SignIn.json';
import './css/signinAnimation.css';

const SignInAnimation = _ => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  }
  return (
    <div id="signin-animation">
        <Lottie 
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>
  )
}

export default SignInAnimation;