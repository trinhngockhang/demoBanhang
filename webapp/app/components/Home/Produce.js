import React from 'react';
import Slider from 'react-slick';
import DisplayProduce from './DisplayProduce';


export default class Produce extends React.Component {
    shouldComponentUpdate(nextProps) {
        return false;
    }
    render() {
        var settings = {
            dots: true,
            lazyLoad: true,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                </Slider>
            </div>             
        )
    }
}
