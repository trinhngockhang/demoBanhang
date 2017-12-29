import React from 'react';

const HeaderMobile = () => {
    return (
        <div>
            <section id="header-mobile">
                <div class="row header-mobile">
                    <div class="col-md-9 col-2">
                        <div class="nav-wrap">

                        </div>
                        <div class="btn-menu">
                            <span></span>
                        </div>
                    </div>
                    <div class="col-8" >
                        <form action="">
                            <input type="text" id="input-mobile" placeholder="Bạn cần tìm gì?"></input>
                        </form>
                    </div>
                    <div class="col-2 inner-box">
                        <div class="inner-box mobile">
                            <a href="#" title="">
                                <div class="icon-cart mobile">
                                    <img src="./images/icons/cart.png" alt="" />
                                </div>
                            </a>
                            <div class="dropdown-box mobile">
                                <ul>
                                    <li>
                                        <div class="img-product">
                                            <img src="./images/product/other/img-cart-1.jpg" alt="" />
                                        </div>
                                        <div class="info-product">
                                            <div class="name">
                                                Samsung - Galaxy S6 4G LTE <br />with 32GB Memory Cell Phone
												</div>
                                            <div class="price">
                                                <span>1 x</span>
                                                <span>$250.00</span>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <span class="delete">x</span>
                                    </li>
                                    <li>
                                        <div class="img-product">
                                            <img src="./images/product/other/img-cart-2.jpg" alt="" />
                                        </div>
                                        <div class="info-product">
                                            <div class="name">
                                                Sennheiser - Over-the-Ear Headphone System - Black
												</div>
                                            <div class="price">
                                                <span>1 x</span>
                                                <span>$250.00</span>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <span class="delete">x</span>
                                    </li>
                                </ul>
                                <div class="total">
                                    <span>Subtotal:</span>
                                    <span class="price">$1,999.00</span>
                                </div>
                                <div class="btn-cart">
                                    <a href="shop-cart.html" class="view-cart" title="">View Cart</a>
                                    <a href="shop-checkout.html" class="check-out" title="">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeaderMobile;