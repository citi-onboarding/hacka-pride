import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';


import './Information.css';
import '../General.css';

function Information() {
    const [info, setInfo] = useState('');
    const [repo, setRepo] = useState('');

    const getDateData = async () => {
        const res = await axios.get(`${url.url}/api/goal`);
        setInfo(res.data);
    }

    // setInterval(function(){ console.log(repo); }, 3000);

    useEffect(() => {
        getDateData();
      }, []);


    return (
        <div className="all-information-content">
            <h2>Informações sobre o evento</h2>
            <div className="trophy-svg" alt="ilustração de arco-íris e um casal segurando troféu"></div>
            <section className="data-content">
                {info && (
                <>
                <div className="description-www">
                    <div className="text-local-data font-styles">
                        <div className="calendar-svg" alt="ilustração de calendário roxo"></div>
                        <p className="alinhar-data">{info[0]?.data}</p>
                    </div>
                    <div className="text-local-data adjust-this font-styles">
                        <div className="local-svg" alt="ilustração de calendário roxo"></div>
                        <p className="alinhar-local">{info[0]?.local}</p>
                    </div>
                    <p className="text-description">{info[0]?.objetivo}</p>
                </div>
                <div className="prizing">
                    <h3>Premiações</h3>
                    <div className="each-prize">
                        <div className="second" alt="pódio segundo lugar">
                            <h1 className="each-position podium-sec display-number">2</h1>
                            <h1 className="mobile-position-number adjusting-display">1</h1>
                            <p>{info[0]?.premio2}</p>
                        </div>
                        <div className="first-prize" alt="pódio primeiro lugar">
                            <h1 className="each-position podium-first display-number">1</h1>
                            <h1 className="mobile-position-number adjusting-display">2</h1>
                            <p>{info[0]?.premio1}</p>
                        </div>
                        <div className="third" alt="pódio terceiro lugar">
                            <h1 className="each-position podium-third display-number">3</h1>
                            <h1 className="mobile-position-number adjusting-display">3</h1>
                            <p>{info[0]?.premio3}</p>
                        </div>
                    </div>
                </div>
                </>
                    )}
            </section>
        </div>
    )
};

export default Information;