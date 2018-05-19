import React, { Component } from 'react';
import './DefaultLayout.css';

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="header-section">

        </div>
        <div id="contents-section">
          {this.props.children}
        </div>
        <div id="footer-section">

        </div>
      </React.Fragment>
    )
  }
}

export default DefaultLayout;
