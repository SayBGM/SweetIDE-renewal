import React from 'react';
import Proptypes from 'prop-types';
import './css/VerifiEmail.css'

const VerifiEmail = ({Email}) => {
  return (
    <div className="Verifi-contents-Email">
      {`[ ${Email} ]`}
    </div>
  )
}

VerifiEmail.Proptypes={
  Email: Proptypes.string.isRequired,
}

export default VerifiEmail;