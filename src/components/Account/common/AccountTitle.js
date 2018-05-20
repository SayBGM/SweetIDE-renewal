import React from 'react';
import Proptypes from 'prop-types';
import './css/accountTitle.css';

const AccountTitle = ({ text }) => {
  return <div id="account-title">{text}</div>
}

AccountTitle.Proptypes = {
  text: Proptypes.string.isRequired
}


export default AccountTitle;