import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';

import './Banner.css';
import '../General.css';

function Banner() {
    return (
        <div className="all-banner-content">
            <div className="banner-illustration"></div>
            <div className="infos-banner">
                <h1 className="title-banner">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</h1>
                <div className="timer-blocks">
                    <div className="pink-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-self">76</h6>
                            <p>dias</p>
                        </div>
                    </div>
                    <div className="yellow-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-margin">10</h6>
                            <p className="yellow-text">horas</p>
                        </div>
                    </div>
                    <div className="green-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-margin">28</h6>
                            <p>minutos</p>
                        </div>
                    </div>
                    <div className="blue-block">
                        <div className="inside-block-content">
                            <h6 className="block-number adjust-number">04</h6>
                            <p>segundos</p>
                        </div>
                    </div>
                </div>
                <p className="banner-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                <a><button className="banner-button">Edital</button></a>
            </div>
        </div>
    );
}

export default Banner;