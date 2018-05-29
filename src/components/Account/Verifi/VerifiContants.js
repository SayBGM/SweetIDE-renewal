import React from 'react';
import VerifiEmail from './VerifiEmail';
import Verifexplan from './Verifiexplan';
import VerifiSubExplan from './VerifiSubExplan'

export default class VerifiContants extends React.Component{
  render(){
    return (
      <div className="Verifi-contants">
        <VerifiEmail Email={'back3122@naver.com'}/>
        <Verifexplan />
        <VerifiSubExplan />
      </div>
    )
  }
}