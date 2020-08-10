import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';

import './Navbar.css';

function Navbar() {
    const [resp, setResp] = useState([]);

    const loadExamples = async () => {
      const res = await axios.get(`${url.url}/api/ticket`);
      setResp(res.data);
    };

    function closeclick(){
        var menu = document.querySelector('.link-to-contact');
        var closeIcon = document.querySelector('#nav-toggle');
    
        menu.addEventListener('click', handleMenuClick);
    
        function handleMenuClick() {
            closeIcon.checked = false;
            window.scrollTo(0, 5000);
        }
    }

    function closeclickelse(){
        var menu = document.querySelector('.link-to-guests');
        var closeIcon = document.querySelector('#nav-toggle');
    
        menu.addEventListener('click', handleMenuClick);
    
        function handleMenuClick() {
            closeIcon.checked = false;
            if(window.innerWidth > 700 && window.innerWidth < 1000) {
                window.scrollTo(0, 2350);
            } else if(window.innerWidth > 1000) {
                window.scrollTo(0, 1250);
            } else {
            window.scrollTo(0, 1950);
            }
        }
    }

    function closeclickelseother(){
        var menu = document.querySelector('.nav-infos-link');
        var closeIcon = document.querySelector('#nav-toggle');
    
        menu.addEventListener('click', handleMenuClick);
        
    
        function handleMenuClick() {
            closeIcon.checked = false;
            if(window.innerWidth > 1000) {
                window.scrollTo(0, 400);
            } else {
                window.scrollTo(0, 900);
            }
     }
    }
  
    useEffect(() => {
      closeclickelseother();
      closeclickelse();
      closeclick();
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
            <ul htmlFor="nav-shaddow" className="options">
                <li className="text">
                    <a htmlFor="nav-shaddow" className="normal-text" alt="informações" href="#informaçoes" onClick={() => {
                        window.scrollTo(0, 650);
                    }}>Informações</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="convidados" href="#convidados" onClick={()=> {
                        window.scrollTo(0, 1400);
                    }}>Convidados</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="parceiros" href="#parceiro" onClick={() => {
                        window.scrollTo(0, 2220);
                    }}>Parceiros</a>
                </li>
                <li className="text">
                    <a className="normal-text" alt="contato" href="#contato" onClick={()=> {
                        window.scrollTo(0, 3210);
                    }}>Contato</a>
                </li>
                {resp && (
                <li className="text"><a href={resp[0]?.IngressoURL} target="_blank" rel="noopener noreferrer"><button className="normal-button">Ingresso</button></a></li>
                )}
            </ul>
        </nav>

        <nav className="tipo-2" alt="navbar">
        <input id="nav-toggle" type="checkbox"></input>
            <div className="links">
                <div className="text-mobile">
                    <a className="nav-infos-link" href="#informaçoes" onClick={closeclickelseother}><h3>Informações sobre o evento</h3></a>
                </div>
                <div className="text-mobile">
                    <a className="link-to-guests" href="#convidados" onClick={closeclickelse}><h3>Convidados do Hacka Pride</h3></a>
                </div>
                <div className="text-mobile">
                    <a htmlFor="nav-toggle" href="#contato" className="link-to-contact" onClick={closeclick}><h3>Tire suas dúvidas conosco</h3></a>
                </div>
                {resp && (
                <div className="text-mobile"><a href={resp[0]?.IngressoURL} target="_blank" rel="noopener noreferrer"><button className="button-mobile">Ingresso</button></a></div>
                )}
                <div className="painting" alt="imagem com duas pessoas coloridas"></div>
            </div>
            <div className="logo logo-2"></div>
            <label htmlFor="nav-toggle" className="icon-burguer">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
    </nav>
    </div>
    );
}

export default Navbar;