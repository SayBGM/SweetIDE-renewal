import React from 'react';
import './css/footer.css';

const Footer = _ => {
  return(
    <div id="footer-section">
      <div id="footer-wrapper">
        <div id="footer-company-rule">
          <p>회사소개</p>
          <p>개인정보 취급 방침</p>
          <p>이용 약관</p>
        </div>
        <div id="footer-social-btn-wrapper">
          <div id="fonter-social-contents">
            <div className="footer-social-btn twitter"></div>
            <div className="footer-social-btn facebook"></div>
            <div className="footer-social-btn instargram"></div>
          </div>
        </div>
        <div id="footer-service-info-wrapper">
          <div className="footer-service-info">COPYRIGHT © 2017 SWEETFAB INC.</div>
          <div className="filter"></div>
          <div className="footer-service-info">Designed By Nayeon Kim  |  pure.yeoni@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;