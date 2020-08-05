import React from 'react';
import Hug from './Hug';

import Mentors from '../Mentors';
import Slider from '../Slider';

import './Guests.css';
import '../General.css';

function Guests(props) {
    return(
        <div className="all-content" id="guests">
            <div className="postision-guests" alt="parceiros do hackapride">
            <div className="positioning-section">
            <h2>Convidados do HackaPride</h2>
            <div className="informs">
                    <div className="desc first">
                        <h6>Staffs</h6>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    </div>
                    <div className="staffs" alt="slider dos staffs">
                        <Slider />
                    </div>
            </div>

            <div className="informs informs-reverse">
                    <div className="desc desc-mentors">
                        <h6>Mentores</h6>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    </div>
                    <div className="mentors" alt="slider dos mentores">
                        <Mentors />
                    </div>
            </div>
               </div>
               </div>
               <Hug alt="desenho de abraço"/>
        </div>
    )
}

export default Guests;