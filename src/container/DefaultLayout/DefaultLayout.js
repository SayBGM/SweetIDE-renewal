import React, { Component } from 'react';
import Header from '../../components/DefaultLayout/Header';
import Footer from '../../components/DefaultLayout/Footer';
import './DefaultLayout.css';

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div id="main-section">
          {this.props.children}
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default DefaultLayout;
