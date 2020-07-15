import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Partners.css';
import '../General.css';

function Partners() {
    const [partners, setPartners] = useState('');

    const dataPartners = async () => {
        const resp = await axios.get('http://localhost:3001/api/company');
        setPartners(resp.data);
      };
    
      useEffect(() => {
        dataPartners();
      }, []);



    return (
        <div className="all-partner-content">
            <div className="text-section">
                <h2>Nossos parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
            </div>
            <div className="partners-logos">
                {partners.dataParceiros?.map(({ _id, nome, imagens }) => (
                <img className="each-logo" key={_id} src={imagens[0]?.url} alt={nome}></img>
                ))}
            </div>
            <div className="align-every">
                <div className="company-citi">
                        <div className="citi-logo-image"></div>
                        <div className="divisoria"></div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
                </div>
                <div className="flag-svg"></div>
            </div>
        </div>
    );
}

export default Partners;