import React from 'react';
import MainNavigation from './../../components/Main/MainNavigation';
import MainExplain from './../../components/Main/MainExplain';
import Footer from '../../components/DefaultLayout/Footer';

export default class Main extends React.Component{
  state = {

  }
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