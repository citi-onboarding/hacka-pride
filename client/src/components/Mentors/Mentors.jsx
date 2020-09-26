import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Description from '../Slider/Description';
import url from '../../apiURL';

import '../Slider/Slider.css';


//props are on Description.jsx
//this component will be rendering the informations to staffs slider
function Mentors() {

    const [dadosMentors, setDados] = useState({dataMentors: []});
    
    const loadDados = async () => {
        const res = await axios.get(`${url.url}/api/collaborators`);
        setDados(res.data);
      };

      useEffect(() => {
        loadDados();
      }, []);

      const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
      };

    return (
      <div className="fix-content">
          <button className="prev" onClick={() => {
            document.querySelector(".slick-next.slick-arrow").click();
          }} alt="botao para voltar slider"></button>
        <Slider className="slider-pattern" {...settings}>
          {dadosMentors.dataMentors?.map(({ _id, Nome, Descrição, FacebookURL, InstagramURL, LinkedInURL, Foto }) => {
            return (    
                <Description
                  key={_id}
                  img={Foto.secure_url}
                  Nome={Nome}
                  Descrição={Descrição}
                  linkFB={FacebookURL}
                  linkIG={InstagramURL}
                  linkIN={LinkedInURL}
                  />
              );
            })}
        </Slider>
        <button className="prox" onClick={() => {
            document.querySelector(".slick-next.slick-arrow").click();
          }} alt="botao para avançar slider"></button>
      </div>
    );
};

export default Mentors;
