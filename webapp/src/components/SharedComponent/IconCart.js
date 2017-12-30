import React from 'react';

export default (props) => {
    return (
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
    )
}