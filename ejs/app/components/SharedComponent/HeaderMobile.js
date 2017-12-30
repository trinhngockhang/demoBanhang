import React from 'react';

class HeaderMobile extends React.Component {
    // shouldComponentUpdate(){
    //     return true;
    // }
    render() {
        return (
            <div>
                <section id="header-mobile">
                    <div className="row header-mobile">
                        <div className="col-md-9 col-2">
                            <div className="nav-wrap">

                            </div>
                            <div className="btn-menu">
                                <span></span>
                            </div>
                        </div>
                        <div className="col-8" >
                            <form action="">
                                <input type="text" id="input-mobile" placeholder="Bạn cần tìm gì?" />
                            </form>
                        </div>
                        <div className="col-2 inner-box">
                            <div className="inner-box mobile">
                                <a href="#" title="">
                                    <div className="icon-cart mobile">
                                        <img src="./images/icons/cart.png" alt="" />
                                    </div>
                                </a>
                                <div className="dropdown-box mobile">
                                    <ul>
                                        <li>
                                            <div className="img-product">
                                                <img src="./images/product/other/img-cart-1.jpg" alt="" />
                                            </div>
                                            <div className="info-product">
                                                <div className="name">
                                                    Samsung - Galaxy S6 4G LTE <br />with 32GB Memory Cell Phone
												</div>
                                                <div className="price">
                                                    <span>1 x</span>
                                                    <span>$250.00</span>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <span className="delete">x</span>
                                        </li>
                                        <li>
                                            <div className="img-product">
                                                <img src="./images/product/other/img-cart-2.jpg" alt="" />
                                            </div>
                                            <div className="info-product">
                                                <div className="name">
                                                    Sennheiser - Over-the-Ear Headphone System - Black
												</div>
                                                <div className="price">
                                                    <span>1 x</span>
                                                    <span>$250.00</span>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <span className="delete">x</span>
                                        </li>
                                    </ul>
                                    <div className="total">
                                        <span>Subtotal:</span>
                                        <span className="price">$1,999.00</span>
                                    </div>
                                    <div className="btn-cart">
                                        <a href="shop-cart.html" className="view-cart" title="">View Cart</a>
                                        <a href="shop-checkout.html" className="check-out" title="">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HeaderMobile;