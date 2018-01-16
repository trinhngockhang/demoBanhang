import React from 'react';
import Slider from 'react-slick';
import DisplayProduce from './DisplayProduce';


export default class Produce extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            className: 'slides'
        };
        return (
            <section className="flat-imagebox style4" key={this.props.name}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 tittle">
                            <div className="flat-row-title">
                                <h3>{this.props.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 imgCategory">
                            <img src="./images/slider/img_tittle.jpg" className="img_tittle" alt="" />
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <Slider {...settings}>
                                {
                                    this.props.produce.map((item, index) => {
                                        return (
                                            <div>
                                                <DisplayProduce item={item} key={index} />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
