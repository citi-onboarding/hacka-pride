import React, { useState, useEffect } from 'react';


import './Information.css';
import '../General.css';

function Information() {
    return (
        <div className="all-information-content">
            <h2>Informações sobre o evento</h2>
            <div className="trophy-svg"></div>
            <section className="data-content">
                <div className="description-www">
                    <p><div className="calendar-svg"></div>&nbsp;16, 17 e 18 de Outubro</p>
                    <p><div className="local-svg"></div>Local a ser definido</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </div>
            </section>
        </div>
    )
};

export default Information;