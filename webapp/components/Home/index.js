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
                                        Object.values(this.props.produce).map(item => {
                                            return item.map((s,idx) => {
                                                return (
                                                    <div className="imagebox style4">
                                                        <div className="box-image">
                                                            <a href="#" title="">
                                                                <img src={s.image_url} alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="box-content">
                                                            <div className="cat-name">
                                                                <a href="#" title="">{s.title}</a>
                                                            </div>
                                                            <div className="product-name">
                                                                <a href="#" title="">{s.subtitle}<br /></a>
                                                            </div>
                                                            <div className="price">
                                                                <span className="sale">{s.price}</span>
                                                                <span className="regular">{s.quantity}</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-cart style2 home">
                                                            <div className="btn-add-cart home">
                                                                <a href="#" title=""><img src="./images/icons/add-cart.png" alt="" />Mua</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 imgCategory">
                                <img src="/static/images/slider/img_tittle2.jpg" className="img_tittle" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}