import React from 'react';
import Rainbow from '../../assets/Rainbow'

import './Footer.css';
import '../General.css';

function Footer() {
    return(
    <section>
      <div className="footer-svg">
        <Rainbow className="rainbow-position"/>
      </div>
      <div className="purple"></div>
        <footer  className="footer-footer">
            <p>Copyright &copy; 2020 Codecup</p>
            <p>Made with &lt;/&gt; and &nbsp;<div className="heart"></div>&nbsp;by CITi</p>
        </footer>
    </section>
    );
}

export default Footer;