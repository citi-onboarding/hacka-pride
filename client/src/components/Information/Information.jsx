import React, { useState, useEffect } from 'react';


import './Information.css';
import '../General.css';

function Information() {
    return (
        <div className="all-information-content">
            <h2>Informações sobre o evento</h2>
            <div className="trophy-svg" alt="ilustração de arco-íris e um casal segurando troféu"></div>
            <section className="data-content">
                <div className="description-www">
                    <div className="text-local-data font-styles">
                        <div className="calendar-svg" alt="ilustração de calendário roxo"></div>
                        <p className="alinhar-data">16, 17 e 18 de outubro</p>
                    </div>
                    <div className="text-local-data adjust-this font-styles">
                        <div className="local-svg" alt="ilustração de calendário roxo"></div>
                        <p className="alinhar-local">Local a ser definido</p>
                    </div>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </div>
                <div className="prizing">
                    <h3>Premiações</h3>
                    <div className="each-prize">
                        <div className="second" alt="pódio segundo lugar">
                            <h1 className="each-position podium-sec">2</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="first-prize" alt="pódio primeiro lugar">
                            <h1 className="each-position podium-first">1</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="third" alt="pódio terceiro lugar">
                            <h1 className="each-position podium-third">3</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Information;