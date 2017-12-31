import React from 'react';

export default class TabletItem extends React.PureComponent {
    render() {
        return (
            <div className="row sort-box">
                {
                    this.props.items.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-sm-6 col-6 no-padding" key={index}>
                                <div className="product-box">
                                    <div className="imagebox">
                                        <div className="box-image owl-carousel-1">
                                            <a href="#" title="">
                                                <img src={item.image_url} alt="" />
                                            </a>
                                        </div>
                                        <div className="box-content">
                                            <div className="cat-name">
                                                <a href="#" title="">{item.title}</a>
                                            </div>
                                            <div className="product-name">
                                                <a href="#" title="">{item.subtitle}</a>
                                            </div>
                                            <div className="price">
                                                <span className="sale">{item.price} đ</span>
                                                <span className="regular">{item.sale}</span>
                                            </div>
                                        </div>
                                        <div className="box-bottom">
                                            <div className="btn-add-cart">
                                                <a href="#" title="">
                                                    <img src="./images/icons/add-cart.png" alt="" />Mua
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
