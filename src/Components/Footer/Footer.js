import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <a>Policy |</a>
&nbsp;
    <a>About project |</a>
&nbsp;
    <span>
      &#169;
      {new Date().getFullYear()}
      Lviv, Ukraine
    </span>
  </div>
);

export default Footer;
