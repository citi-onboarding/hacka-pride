import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import './Test.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            dadosStaffs: ''
        }
    }

    componentDidMount() {
        (async () => {
          const response = await axios.get(`http://localhost:3001/api/collaborators`);
          this.setState({
            dadosStaffs: response.data
          });
        })();
      }

    sliders() {
        return this.state.dadosStaffs.dataStaffs?.map(({ _id, Nome, Descrição, FacebookURL, InstagramURL, LinkedInURL, Foto }) => {
            return (
                <div key={_id}>
                    <img alt="image" src={Foto.url} />
                </div>
            )
        });
    }

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrow: false
        }
        return (
            <div >
                <Slider className="sim" {...settings}>
                    {this.sliders()}
                </Slider>
            </div>
        );
    }
}
export default Home;