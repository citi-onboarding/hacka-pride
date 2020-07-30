import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL';

import './Banner.css';
import '../General.css';

function Banner() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [eventDate, setEventDate] = useState('');
    const [ingresso, setIngresso] = useState('');

    let interval = useRef();
    
    const timeNow = eventDate[0]?.DataEvento;

    const startTimer = () => {
        const countdownDate = new Date(Date.parse(`${timeNow}`)).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    const getDB = async () => {
        const resp = await axios.get(`${url.url}/api/banner`);
        setEventDate(resp.data);
        const ingresso = await axios.get(`${url.url}/api/notice`);
        setIngresso(ingresso.data);
    };

    useEffect(() => {
        getDB();
      }, []);

    return (
        <div className="all-banner-content">
            <div className="banner-illustration"></div>
            <div className="infos-banner">
                {eventDate && ingresso && (
                <>
                <h1 className="title-banner">{eventDate[0]?.Título}</h1>
                <div className="timer-blocks">
                    <div className="pink-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-self">{timerDays}</h6>
                            <p>dias</p>
                        </div>
                    </div>
                    <div className="yellow-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-margin">{timerHours}</h6>
                            <p className="yellow-text">horas</p>
                        </div>
                    </div>
                    <div className="green-block">
                        <div className="inside-block-content">
                            <h6 className="block-number correct-margin">{timerMinutes}</h6>
                            <p>minutos</p>
                        </div>
                    </div>
                    <div className="blue-block">
                        <div className="inside-block-content">
                            <h6 className="block-number adjust-number">{timerSeconds}</h6>
                            <p>segundos</p>
                        </div>
                    </div>
                </div>
                <p className="banner-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                <a href={ingresso[0]?.EditalURL} target="_blank"><button className="banner-button" alt="botao edital">Edital</button></a>
                </>
                )}
            </div>
        </div>
    );
}

export default Banner;