import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';

import './Navbar.css';

function Navbar(props) {
    const [resp, setResp] = useState([]);

    const loadExamples = async () => {
      const res = await axios.get(`${url.url}/api/ticket`);
      setResp(res.data);
    };
  
    useEffect(() => {
      loadExamples();
      const nav = document.querySelector('.tipo-1');
      window.onscroll = function () {
          var top = window.scrollY;
          if (top >= 80){
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
                    <a for="nav-shaddow" className="normal-text" alt="informações" href="#infos">Informações</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="convidados" href="#guests">Convidados</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="parceiros" href="#partners">Parceiros</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="contato" href="#contact">Contato</a>
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
                    <a href="#infos" className="nav-infos-link" onClick={() => {
                        var menu = document.querySelector('.nav-infos-link');
                        var closeIcon = document.querySelector('#nav-toggle');
                    
                        menu.addEventListener('click', handleMenuClick);
                    
                        function handleMenuClick() {
                            closeIcon.checked = false;
                        }
                    }}><h3>Informações sobre o evento</h3></a>
                </div>
                <div className="text-mobile">
                    <a href="#guests" className="link-to-guests" onClick={() => {
                        var menu = document.querySelector('.link-to-guests');
                        var closeIcon = document.querySelector('#nav-toggle');
                    
                        menu.addEventListener('click', handleMenuClick);
                    
                        function handleMenuClick() {
                            closeIcon.checked = false;
                        }
                    }}><h3>Convidados do Hacka Pride</h3></a>
                </div>
                <div className="text-mobile">
                    <a href="#contact" for="nav-toggle" className="link-to-contact" onClick={() => {
                        var menu = document.querySelector('.link-to-contact');
                        var closeIcon = document.querySelector('#nav-toggle');
                    
                        menu.addEventListener('click', handleMenuClick);
                    
                        function handleMenuClick() {
                            closeIcon.checked = false;
                        }
                    }}><h3>Tire suas dúvidas conosco</h3></a>
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