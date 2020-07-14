import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Description from './Description';

import './Slider.css';


//props are on Description.jsx
//this component will be rendering the informations to staffs slider
function Mentors() {

    const [dadosMentors, setDados] = useState([]);
    
    const loadDados = async () => {
        const res = await axios.get('http://localhost:3001/api/collaborators');
        setDados(res.data);
      };

      useEffect(() => {
        loadDados();
      }, []);

      const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <Slider className="slider-pattern" {...settings}>
          {dadosMentors.dataMentors?.map(({index, _id, Nome, Descrição, FacebookURL, InstagramURL, LinkedInURL, Foto }) => {
            return (    
                <Description
                  key={_id}
                  img={Foto.url}
                  Nome={Nome}
                  Descrição={Descrição}
                  linkFB={FacebookURL}
                  linkIG={InstagramURL}
                  linkIN={LinkedInURL}
                  />
              );
            })}
            <span>oi</span>
        </Slider>
    );
};

export default Mentors;