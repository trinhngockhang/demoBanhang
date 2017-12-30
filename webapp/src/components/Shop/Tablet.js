import React from 'react';
import { connect } from 'react-redux';

class Tablet extends React.Component {
    render() {
        const props = this.props.data.page;
        return (
                <div className="col-lg-10 col-md-9">
                    <div className="main-shop">
                        <div className="wrap-imagebox">
                            <div className="flat-row-title">
                                <h3 className="TITLE">Điện thoại di động & Máy tính bảng</h3>
                                
                                <div className="sort-product" style={{float: 'right'}}>
                                    <div className="sort" style={{float: 'left'}}>
                                        <div className="popularity">
                                            <select name="popularity">
                                                <option value="">Độ phổ biến</option>
                                                <option value="">Giá từ thấp đến cao</option>
                                                <option value="">Giá từ cao đến thấp</option>
                                        
                                            </select>
                                        </div>
                                        <ul className="icons" style={{float: 'right'}}>
                                            <li>
                                                <img src="./images/icons/list-1.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="./images/icons/list-2.png" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                   
                                </div>    
                            </div>
                            <div className="tab-product">
                                <div className="row sort-box">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/02.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/02.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/02.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Cameras</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$2,009.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Quan tâm
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/03.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/03.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/03.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Headphones</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Beats Solo<br />HD</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$1,999.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Quan tâm
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <span className="item-sale">SALE</span>
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/04.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/04.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/04.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Computers</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple İmac Z0SC4824<br />Retina</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$5,759.68</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Quan tâm
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/06.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/06.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/06.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Cameras</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">New X5C-1 2.4Ghz Gyro <br />RC Quadcopter Drone</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$2,009.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <span className="compare">
                                                            <a href="#" title="">
                                                                <img src="./images/icons/compare.png" alt="" />Quan tâm
																</a>
                                                        </span>
                                                        <span className="wishlist">
                                                            <a href="#" title="">
                                                                <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
																</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/07.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/07.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/07.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Computers</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple iPad Air 2 32GB 9.7" <br />Tablet</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$5,759.68</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Quan tâm
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="../images/product/other/08.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="../images/product/other/08.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/08.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Computers</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple İmac Z0SC4824<br />Retina</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$5,759.68</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Mua
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Quan tâm
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Ưa chuộng
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <span className="item-new">NEW</span>
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/01.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/01.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/01.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Laptops</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple iPad Mini<br />G2356</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$1,250.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Compare
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Wishlist
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/05.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/05.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/05.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Cameras</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple iPad Mini<br />G2356</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$1,250.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <span className="compare">
                                                            <a href="#" title="">
                                                                <img src="./images/icons/compare.png" alt="" />Compare
																</a>
                                                        </span>
                                                        <span className="wishlist">
                                                            <a href="#" title="">
                                                                <img src="./images/icons/wishlist.png" alt="" />Wishlist
																</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="../images/product/other/l03.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="../images/product/other/l03.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l03.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Laptops</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple iPad Mini<br />G2356</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$1,250.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Compare
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Wishlist
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l02.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l02.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l02.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Laptops</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple iPad Mini <br />G2356</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$1,250.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Compare
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Wishlist
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l04.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l04.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l04.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Cameras</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">HTC One M8</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$2,009.00</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Compare
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Wishlist
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-box">
                                            <div className="imagebox">
                                                <div className="box-image owl-carousel-1">
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l05.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l05.jpg" alt="" />
                                                    </a>
                                                    <a href="#" title="">
                                                        <img src="./images/product/other/l05.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="box-content">
                                                    <div className="cat-name">
                                                        <a href="#" title="">Computers</a>
                                                    </div>
                                                    <div className="product-name">
                                                        <a href="#" title="">Apple macbook pro Z0SC4824<br />Retina</a>
                                                    </div>
                                                    <div className="price">
                                                        <span className="sale">$5,759.68</span>
                                                        <span className="regular">$2,999.00</span>
                                                    </div>
                                                </div>
                                                <div className="box-bottom">
                                                    <div className="btn-add-cart">
                                                        <a href="#" title="">
                                                            <img src="./images/icons/add-cart.png" alt="" />Add to Cart
															</a>
                                                    </div>
                                                    <div className="compare-wishlist">
                                                        <a href="#" className="compare" title="">
                                                            <img src="./images/icons/compare.png" alt="" />Compare
															</a>
                                                        <a href="#" className="wishlist" title="">
                                                            <img src="./images/icons/wishlist.png" alt="" />Wishlist
															</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sort-box">
                                    <div className="product-box style3">
                                        <div className="imagebox style1 v3">
                                            <div className="box-image">
                                                <a href="#" title="">
                                                    <img src="./images/product/other/s02.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="box-content">
                                                <div className="cat-name">
                                                    <a href="#" title="">Cameras</a>
                                                </div>
                                                <div className="product-name">
                                                    <a href="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</a>
                                                </div>
                                                <div className="status">
                                                    Availablity: In stock
													</div>
                                                <div className="info">
                                                    <p>
                                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
														</p>
                                                </div>
                                            </div>
                                            <div className="box-price">
                                                <div className="price">
                                                    <span className="regular">$2,999.00</span>
                                                    <span className="sale">$1,999.00</span>
                                                </div>
                                                <div className="btn-add-cart">
                                                    <a href="#" title="">
                                                        <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                </div>
                                                <div className="compare-wishlist">
                                                    <a href="#" className="compare" title="">
                                                        <img src="./images/icons/compare.png" alt="" />Compare
														</a>
                                                    <a href="#" className="wishlist" title="">
                                                        <img src="./images/icons/wishlist.png" alt="" />Wishlist
														</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-box style3">
                                        <div className="imagebox style1 v3">
                                            <div className="box-image">
                                                <a href="#" title="">
                                                    <img src="./images/product/other/01-v3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="box-content">
                                                <div className="cat-name">
                                                    <a href="#" title="">Cameras</a>
                                                </div>
                                                <div className="product-name">
                                                    <a href="#" title="">New X5C-1 2.4Ghz Gyro <br />RC Quadcopter Drone</a>
                                                </div>
                                                <div className="status">
                                                    Availablity: In stock
													</div>
                                                <div className="info">
                                                    <p>
                                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
														</p>
                                                </div>
                                            </div>
                                            <div className="box-price">
                                                <div className="price">
                                                    <span className="regular">$2,999.00</span>
                                                    <span className="sale">$1,999.00</span>
                                                </div>
                                                <div className="btn-add-cart">
                                                    <a href="#" title="">
                                                        <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                </div>
                                                <div className="compare-wishlist">
                                                    <a href="#" className="compare" title="">
                                                        <img src="./images/icons/compare.png" alt="" />Compare
														</a>
                                                    <a href="#" className="wishlist" title="">
                                                        <img src="./images/icons/wishlist.png" alt="" />Wishlist
														</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-box style3">
                                        <div className="imagebox style1 v3">
                                            <div className="box-image">
                                                <a href="#" title="">
                                                    <img src="./images/product/other/02-v3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="box-content">
                                                <div className="cat-name">
                                                    <a href="#" title="">Cameras</a>
                                                </div>
                                                <div className="product-name">
                                                    <a href="#" title="">Apple İmac Z0SC4824<br />Retina</a>
                                                </div>
                                                <div className="status">
                                                    Availablity: In stock
													</div>
                                                <div className="info">
                                                    <p>
                                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
														</p>
                                                </div>
                                            </div>
                                            <div className="box-price">
                                                <div className="price">
                                                    <span className="regular">$2,999.00</span>
                                                    <span className="sale">$1,999.00</span>
                                                </div>
                                                <div className="btn-add-cart">
                                                    <a href="#" title="">
                                                        <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                </div>
                                                <div className="compare-wishlist">
                                                    <a href="#" className="compare" title="">
                                                        <img src="./images/icons/compare.png" alt="" />Compare
														</a>
                                                    <a href="#" className="wishlist" title="">
                                                        <img src="./images/icons/wishlist.png" alt="" />Wishlist
														</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-box style3">
                                        <div className="imagebox style1 v3">
                                            <div className="box-image">
                                                <a href="#" title="">
                                                    <img src="./images/product/other/03-v3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="box-content">
                                                <div className="cat-name">
                                                    <a href="#" title="">Cameras</a>
                                                </div>
                                                <div className="product-name">
                                                    <a href="#" title="">New X5C-1 2.4Ghz Gyro <br />RC Quadcopter Drone</a>
                                                </div>
                                                <div className="status">
                                                    Availablity: In stock
													</div>
                                                <div className="info">
                                                    <p>
                                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
														</p>
                                                </div>
                                            </div>
                                            <div className="box-price">
                                                <div className="price">
                                                    <span className="regular">$2,999.00</span>
                                                    <span className="sale">$1,999.00</span>
                                                </div>
                                                <div className="btn-add-cart">
                                                    <a href="#" title="">
                                                        <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                </div>
                                                <div className="compare-wishlist">
                                                    <a href="#" className="compare" title="">
                                                        <img src="./images/icons/compare.png" alt="" />Compare
														</a>
                                                    <a href="#" className="wishlist" title="">
                                                        <img src="./images/icons/wishlist.png" alt="" />Wishlist
														</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-box style3">
                                        <div className="imagebox style1 v3">
                                            <div className="box-image">
                                                <a href="#" title="">
                                                    <img src="./images/product/other/04-v3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="box-content">
                                                <div className="cat-name">
                                                    <a href="#" title="">Cameras</a>
                                                </div>
                                                <div className="product-name">
                                                    <a href="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</a>
                                                </div>
                                                <div className="status">
                                                    Availablity: In stock
													</div>
                                                <div className="info">
                                                    <p>
                                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
														</p>
                                                </div>
                                            </div>
                                            <div className="box-price">
                                                <div className="price">
                                                    <span className="regular">$2,999.00</span>
                                                    <span className="sale">$1,999.00</span>
                                                </div>
                                                <div className="btn-add-cart">
                                                    <a href="#" title="">
                                                        <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                </div>
                                                <div className="compare-wishlist">
                                                    <a href="#" className="compare" title="">
                                                        <img src="./images/icons/compare.png" alt="" />Compare
														</a>
                                                    <a href="#" className="wishlist" title="">
                                                        <img src="./images/icons/wishlist.png" alt="" />Wishlist
														</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '9px' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-pagination">
                            <span>
                                1–15 trên 20 sản phẩm
								</span>
                            <ul className="flat-pagination style1">
                                <li className="prev">
                                    <a href="#" title="">
                                        <img src="./images/icons/left-1.png" alt="" />Trang trước
										</a>
                                </li>
                                <li>
                                    <a href="#" className="waves-effect" title="">01</a>
                                </li>
                                <li>
                                    <a href="#" className="waves-effect" title="">02</a>
                                </li>
                                <li className="active">
                                    <a href="#" className="waves-effect" title="">03</a>
                                </li>
                                <li>
                                    <a href="#" className="waves-effect" title="">04</a>
                                </li>
                                <li className="next">
                                    <a href="#" title="">
                                        Trang sau<img src="./images/icons/right-1.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.shopReducer.data,
    }
}

export default connect(mapStateToProps)(Tablet);