import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import BoxFilter from '../../components/Search/BoxFilter';

class Search extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb />
                <main id="shop" className="style2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-shop">
                                    <div className="wrap-imagebox">
                                        <div className="flat-row-title style4">
                                            <h3>Mobile & Tablet</h3>
                                            <span>
                                                Showing 1–15 of 20 results
									        </span>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="sort-product style1">
                                            <ul className="icons">
                                                <li>
                                                    <img src="./images/icons/list-1.png" alt="" />
                                                </li>
                                                <li>
                                                    <img src="./images/icons/list-2.png" alt="" />
                                                </li>
                                                <li className="filter waves-effect">
                                                    Bộ lọc
										        </li>
                                            </ul>
                                            <BoxFilter />
                                            <div className="sort">
                                                <div className="popularity">
                                                    <select name="popularity">
                                                        <option value="">Sort by popularity</option>
                                                        <option value="">Sort by popularity</option>
                                                        <option value="">Sort by popularity</option>
                                                        <option value="">Sort by popularity</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-box">
                                                    <div className="imagebox">
                                                        <span className="item-new">NEW</span>
                                                        <div className="box-image owl-carousel-1">
                                                            <div className="image">
                                                                <a href="#" title="">
                                                                    <img src="./images/product/other/01.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="image">
                                                                <a href="#" title="">
                                                                    <img src="./images/product/other/01.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="image">
                                                                <a href="#" title="">
                                                                    <img src="./images/product/other/01.jpg" alt="" />
                                                                </a>
                                                            </div>
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

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-box">
                                                    <div className="imagebox">
                                                        <div className="box-image owl-carousel-1">
                                                            <a href="#" title="">
                                                                <img src="./images/product/other/08.jpg" alt="" />
                                                            </a>
                                                            <a href="#" title="">
                                                                <img src="./images/product/other/08.jpg" alt="" />
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                                    <img src="./images/icons/add-cart.png" alt="" />Add to Cart
														</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-pagination style1">
                                        <span>
                                            1-15 trên 20
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
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Search;
