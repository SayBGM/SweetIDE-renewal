import React from 'react';
import Proptypes from 'prop-types';
import './css/accountSubmitBtn.css';

const AccountSubmitBtn = ({ text }) => {
  return <div id="account-submit-btn">{text}</div>
}

AccountSubmitBtn.Proptypes = {
  text: Proptypes.string.isRequired,
}


export default AccountSubmitBtn;