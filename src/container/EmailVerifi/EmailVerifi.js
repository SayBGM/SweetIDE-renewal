import React from 'react';
import VerifiAnimation from './../../components/Account/Verifi/VerifiAnimation';
import VerifiContants from './../../components/Account/Verifi/VerifiContants';
import './css/EmailVerifi.css'

export default class EmailVerifi extends React.Component{
  render(){
    return (
      <div className="Verifi-Main">
        <div className="Verifi-wrapper">
        <VerifiAnimation />
        <VerifiContants />
        </div>
      </div>
    )
  }
}