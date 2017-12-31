import React from 'react';
import DisplayProduce from './DisplayProduce';

export default class Produce extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.produce !== this.props.produce) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
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
                            <div className="col-md-9 col-sm-12">
                                <div className="owl-carousel-3">
                                    {
                                        this.props.produce.map((item, index) => {
                                            return (
                                                <DisplayProduce key={index} item={item}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 imgCategory">
                                <img src="./images/slider/img_tittle2.jpg" className="img_tittle" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
