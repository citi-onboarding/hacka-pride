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
      const nav = document.querySelector('.tipo-1');
      window.onscroll = function () {
          var top = window.scrollY;
          if (top >= 100){
              nav.classList.add('box-sombra')
          } else {
              nav.classList.remove('box-sombra');
          }
      }
    }, []);

    return (
    <div>
        <nav className="tipo-1" alt="navbar">
            <div className="logo"></div>
            <ul for="nav-shaddow" className="options">
                <li className="text">
                    <a for="nav-shaddow" className="normal-text" alt="informações">Informações</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="convidados">Convidados</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="parceiros">Parceiros</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="contato">Contato</a>
                </li>
                {resp && (
                <li className="text"><a href={resp[0]?.IngressoURL} target="_blank" rel="noopener noreferrer"><button className="normal-button">Ingresso</button></a></li>
                )}
            </ul>
        </nav>

        <nav class="tipo-2" alt="navbar">
        <input id="nav-toggle" type="checkbox"></input>
            <div class="links">
                <div className="text-mobile">
                    <a href="#"><h3>Informações sobre o evento</h3></a>
                </div>
                <div className="text-mobile">
                    <a href="#"><h3>Convidados do Hacka Pride</h3></a>
                </div>
                <div className="text-mobile">
                    <a href="#"><h3>Tire suas dúvidas conosco</h3></a>
                </div>
                {resp && (
                <div className="text-mobile"><a href={resp[0]?.IngressoURL} target="_blank" rel="noopener noreferrer"><button className="button-mobile">Ingresso</button></a></div>
                )}
                <div className="painting" alt="imagem com duas pessoas coloridas"></div>
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