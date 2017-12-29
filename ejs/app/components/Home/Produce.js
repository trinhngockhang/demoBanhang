import React from 'react';

export default class Produce extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.produce !== nextProps.produce) {
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
                                                <div className="imagebox style4">
                                                    <div className="box-image">
                                                        <a href="#" title="">
                                                            <img src={item.src} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="box-content">
                                                        <div className="cat-name">
                                                            <a href="#" title="">{item.catName}</a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="#" title="">{item.produceName}<br />{item.productName1}</a>
                                                        </div>
                                                        <div className="price">
                                                            <span className="sale">{item.sale}</span>
                                                            <span className="regular">{item.regular}</span>
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
