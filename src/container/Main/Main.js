import React from 'react';
import MainNavigation from './../../components/Main/MainNavigation';
import MainExplain from './../../components/Main/MainExplain';
import Footer from '../../components/DefaultLayout/Footer';
import './css/Main.css';

export default class Main extends React.Component{
  render(){
    return (
      <React.Fragment>
        <MainNavigation />
        <div className="Main">
          <MainExplain />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}