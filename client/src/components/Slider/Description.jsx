
import React from "react";

import "./Slider.css";

function Description(props) {
    
  return (
    <>    
        <section className="photo-shoot">
            <img className="photo-size" src={props.img} />
        </section>
        <section className="description">
            <section className="details">
                <p>{props.Nome}</p>
                <p>{props.Descrição}</p>
                <section className="logos">
                    <a href={props.linkFB}><div className="logo-image facebook"></div></a>
                    <a href={props.linkIG}><div className="logo-image instagram"></div></a>
                    <a href={props.linkIN}><div className="logo-image linkedin"></div></a>
                </section>
            </section>
        </section>
  </>
  );
}

export default Description;