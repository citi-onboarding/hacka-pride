import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Navbar.css';

function Navbar() {
    const [resp, setResp] = useState([]);

    const loadExamples = async () => {
      const res = await axios.get('http://localhost:3001/api/ticket');
      setResp(res.data);
    };
  
    useEffect(() => {
      loadExamples();
    }, []);

    return (
    <div>
        <nav className="tipo-1">
            <div className="logo"></div>
            <ul for="nav-shaddow" className="options">
                <li className="text">
                    <a for="nav-shaddow" className="normal-text">Informações</a>
                </li>
                <li className="text">
                    <a className="normal-text">Convidados</a>
                </li>
                <li className="text">
                    <a className="normal-text">Parceiros</a>
                </li>
                <li className="text">
                    <a className="normal-text">Contato</a>
                </li>
                {resp && (
                <li className="text"><a href={resp[0]?.IngressoURL} target="_blank"><button className="normal-button">Ingresso</button></a></li>
                )}
            </ul>
        </nav>

        <nav class="tipo-2">
        <input id="nav-toggle" type="checkbox"></input>
            <div class="links">
                <div className="text-mobile">
                    <a><h3>Informações sobre o evento</h3></a>
                </div>
                <div className="text-mobile">
                    <a><h3>Convidados do Hacka Pride</h3></a>
                </div>
                <div className="text-mobile">
                    <a href="#"><h3>Tire suas dúvidas conosco</h3></a>
                </div>
                {resp && (
                <div className="text-mobile"><a href={resp[0]?.IngressoURL}><button className="button-mobile">Ingresso</button></a></div>
                )}
                <div className="painting"></div>
            </div>
            <div className="logo logo-2"></div>
            <label for="nav-toggle" class="icon-burguer">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
    </nav>
    </div>
    );
}

export default Navbar;