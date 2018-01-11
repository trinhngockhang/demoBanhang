import React from 'react';
import DisplayProduce from './DisplayProduce';

export default class Produce extends React.Component {
    // componentDidMount(){
    //     loadjs(['./js/owl.carousel.js','./minify/loading.js'], {
    //         success: function() { /* foo.js loaded */},
    //         async: false
    //     });
    // }

    shouldComponentUpdate(nextProps) {
        if (nextProps.produce !== this.props.produce) {
            return true;
        }
        return false;
    }

    render() {
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
                            <div className="owl-carousel-3">
                                {
                                    this.props.produce.map((item, index) => {
                                        return (
                                            <DisplayProduce item={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
