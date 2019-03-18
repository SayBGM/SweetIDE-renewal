import React from 'react';
import Proptypes from 'prop-types';
import './css/accountSubmitBtn.css';

const AccountSubmitBtn = ({ text }) => {
  return <button type="submit" id="account-submit-btn">{text}</button>
}

AccountSubmitBtn.Proptypes = {
  text: Proptypes.string.isRequired,
}


export default AccountSubmitBtn;