import React, { Component } from 'react';
import Header from '../../components/DefaultLayout/Header';
import Footer from '../../components/DefaultLayout/Footer';
import './defaultLayout.css';

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div id="main-section">
          <div id="main-wrapper">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default DefaultLayout;
