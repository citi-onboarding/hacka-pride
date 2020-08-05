import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';
import Flag from './Flag';

import './Partners.css';
import '../General.css';

function Partners() {
    const [partners, setPartners] = useState('');

    const dataPartners = async () => {
        const resp = await axios.get(`${url.url}/api/company`);
        setPartners(resp.data);
      };
    
      useEffect(() => {
        dataPartners();
      }, []);



    return (
        <div className="all-partner-content" id="partners">
            <div className="text-section">
                <h2>Nossos parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
            </div>
            <div className="partners-logos">
                {partners.dataParceiros?.map(({ _id, nome, imagens }) => (
                <div className="div-size">
                    <img className="each-logo" key={_id} src={imagens[0]?.url} alt={nome}></img>
                </div>
                ))}
            </div>
            <div className="align-every">
            {partners.dataCiti?.map(({ site, facebook, instagram, descrição }) => (
                <div className="company-citi">
                        <div className="citi-logo-image"></div>
                        <div className="divisoria"></div>
                        <p className="desc">{descrição}</p>
                        <div className="svg-company">
                            <a href={facebook} target="_blank" alt="facebook citi" rel="noopener noreferrer"><div className="face"></div></a>
                            <a href={instagram} target="_blank" alt="instagram citi" rel="noopener noreferrer"><div className="insta"></div></a>
                            <a href={site} target="_blank" alt="site citi" rel="noopener noreferrer"><div className="web"></div></a>
                            <p className="website">citi.org.br</p>
                        </div>
                        {/* <div className="flag-svg"></div> */}
                        <Flag />
                </div>
                ))}
            </div>        
        </div>
    );
}

export default Partners;