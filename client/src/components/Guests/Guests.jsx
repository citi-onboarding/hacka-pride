import React, { useState, useEffect } from 'react';
import Hug from '../../assets/Hug'

import Mentors from '../Mentors';
import Slider from '../Slider';

import './Guests.css';
import '../General.css';

function Guests() {
    return(
        <div className="all-content">
            <h2>Convidados do HackaPride</h2>
            <div className="informs">
                    <div className="desc">
                        <h6>Staffs</h6>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    </div>
                    <div className="staffs">
                        <Slider />
                    </div>
            </div>

            <div className="informs informs-reverse">
                    <div className="desc desc-mentors">
                        <h6>Mentores</h6>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    </div>
                    <div className="mentors">
                        <Mentors />
                    </div>
            </div>
            <Hug className="svg-design" />
        </div>
    )
}

export default Guests;