import React from 'react';
import Rainbow from './Rainbow';

import './Footer.css';
import '../General.css';

function Footer() {
    return(
    <section>
      <div className="footer-svg" alt="Arco-íris">
        <Rainbow className="rainbow-position"/>
      </div>
      <div className="purple" alt="footer"></div>
        <footer  className="footer-footer">
            <p>Copyright &copy; 2020 Codecup</p>
            <p>Made with &lt;/&gt; and &nbsp;<span className="heart"></span>&nbsp;by CITi</p>
        </footer>
    </section>
    );
}

export default Footer;