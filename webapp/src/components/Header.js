import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="overlay"></div>
                <div className="preloader">
                    <div className="clear-loading loading-effect-2">
                        <span></span>
                    </div>
                </div>
                <section id="header" className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="flat-support">
                                        <li>
                                            <a href="faq.html" title="">Hỗ trợ</a>
                                        </li>
                                        <li>
                                            <a href="store-location.html" title="">Liên hệ</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking.html" title="">Kiểm tra hàng</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking.html" title="">Đăng nhập</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking.html" title="">Bán hàng</a>
                                        </li>
                                        <li id="li-top">
                                            <a href="order-tracking.html" title="">Chăm sóc khách hàng</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3">
                                    <div id="logo" className="logo">
                                        <a href="index.html" title="">
                                            <img src="./images/logos/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="top-search">
                                        <form action="#" method="get" className="form-search" acceptCharset="utf-8">
                                            <div className="cat-wrap">
                                                <select name="category">
                                                    <option hidden value="">Danh mục</option>
                                                    <option hidden value="">Điện thoại</option>
                                                    <option hidden value="">Máy tính</option>
                                                    <option hidden value="">Laptops</option>
                                                </select>
                                                <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                                <div className="all-categories">
                                                    <div className="cat-list-search">
                                                        <div className="title">
                                                            Thiết bị điện tử
                                        </div>
                                                        <ul>
                                                            <li>Bộ kết nối</li>
                                                            <li>Laptop</li>
                                                            <li>Bộ điều khiển</li>
                                                            <li>Mp3 player</li>
                                                            <li>Máy in</li>
                                                        </ul>
                                                    </div>
                                                    <div className="cat-list-search">
                                                        <div className="title">
                                                            Đồ nội thất
                                        </div>
                                                        <ul>
                                                            <li>Tủ sách</li>
                                                            <li>Ghế đứng</li>
                                                            <li>TV</li>
                                                            <li>Bàn làm việc</li>
                                                            <li>Accent chairs</li>
                                                        </ul>
                                                    </div>
                                                    <div className="cat-list-search">
                                                        <div className="title">
                                                            Accessories
                                        </div>
                                                        <ul>
                                                            <li>Software</li>
                                                            <li>Mobile</li>
                                                            <li>TV stands</li>
                                                            <li>Printers</li>
                                                            <li>Media</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-search">
                                                <input type="text" name="search" placeholder="Bạn cần tìm gì ?" />
                                                <span className="btn-search">
                                                    <button type="submit" className="waves-effect"><img src="./images/icons/search.png" alt="" /></button>
                                                </span>
                                                <div className="search-suggestions">
                                                    <div className="box-suggestions">
                                                        <div className="title">
                                                            Search Suggestions
                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/s05.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Razer RZ02-01071500-R3M1</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $50.00
                                                        </span>
                                                                        <span className="regular">
                                                                            $2,999.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/s06.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Notebook Black Spire V Nitro VN7-591G</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $24.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/14.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Apple iPad Mini G2356</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $90.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/02.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Razer RZ02-01071500-R3M1</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $50.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/l01.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Apple iPad Mini G2356</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $24.00
                                                        </span>
                                                                        <span className="regular">
                                                                            $2,999.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="image">
                                                                    <img src="./images/product/other/s08.jpg" alt="" />
                                                                </div>
                                                                <div className="info-product">
                                                                    <div className="name">
                                                                        <a href="#" title="">Beats Snarkitecture Headphones</a>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span className="sale">
                                                                            $90.00
                                                        </span>
                                                                        <span className="regular">
                                                                            $2,999.00
                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="box-cat">
                                                        <div className="cat-list-search">
                                                            <div className="title">
                                                                Categories
                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Networking &amp; Internet Devices</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Laptops, Desktops &amp; Monitors</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Hard Drives &amp; Memory Cards</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Printers &amp; Ink</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Networking &amp; Internet Devices</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Computer Accessories</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Software</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="box-cart">
                                        <div className="inner-box">
                                            <ul className="menu-compare-wishlist">
                                                <li className="compare">
                                                    <a href="compare.html" title="">
                                                        <img src="images/icons/compare.png" alt="" />
                                                    </a>
                                                </li>
                                                <li className="wishlist">
                                                    <a href="wishlist.html" title="">
                                                        <img src="images/icons/wishlist.png" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="inner-box">
                                            <a href="#" title="">
                                                <div className="icon-cart">
                                                    <img src="images/icons/cart.png" alt="" />
                                                    <span>4</span>
                                                </div>
                                                <div className="price">
                                                    $0.00
										</div>
                                            </a>
                                            <div className="dropdown-box">
                                                <ul>
                                                    <li>
                                                        <div className="img-product">
                                                            <img src="images/product/other/img-cart-1.jpg" alt="" />
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
                                                            <img src="images/product/other/img-cart-2.jpg" alt="" />
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
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-12">
                                <div class="nav-wrap">
                                    <div id="mainnav" class="mainnav">
                                        <ul class="menu">
                                            <li class="has-mega-menu">
												<a href="#" title="">
														<img src="./images/icons/computer.png" class="img-submenu-mobile" alt="">
													<p class="menu-item">Điện tử</p>	
													</a>
												<div class="submenu">
													<div class="row">
														<div class="col-lg-3 col-md-12 col-6">
															<a class="home-category-list__category-grid" href="">
																<div class="home-category-list__category-grid-content">
																	<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																		<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																	</img>
																	</div>
																	<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																</div>
															</a>
															
														</div><!-- /.col-lg-3 col-md-12 -->
														<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Đồng hồ</div>
																	</div>
																</a>
																
														</div><!-- /.col-lg-3 col-md-12 -->
														<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Laptop</div>
																	</div>
																</a>
																
														</div><!-- /.col-lg-3 col-md-12 -->
														<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																	</div>
																</a>
																
														</div><!-- /.col-lg-3 col-md-12 -->
													</div><!-- /.row -->
													<div class="row banner-mobile">
														<div class="col-md-6">
															<div class="banner-box">
																<div class="inner-box">
																	<a href="#" title="">
																		<img src="./images/banner_boxes/submenu-01.png" alt="">
																	</a>
																</div>
															</div>
														</div>
														<div class="col-md-6">
															<div class="banner-box">
																<div class="inner-box">
																	<a href="#" title="">
																		<img src="./images/banner_boxes/submenu-02.png" alt="">
																	</a>
																</div>
															</div>
														</div>
													</div>
													<div class="row banner-mobile">	
														<div class="col-md-6">
															<div class="banner-box">
																<div class="inner-box">
																	<a href="#" title="">
																		<img src="./images/banner_boxes/submenu-01.png" alt="">
																	</a>
																</div>
															</div>
														</div>
														<div class="col-md-6">
															<div class="banner-box">
																<div class="inner-box">
																	<a href="#" title="">
																		<img src="./images/banner_boxes/submenu-02.png" alt="">
																	</a>
																</div>
															</div>
														</div>
													</div><!-- /.row -->
												</div><!-- /.submenu -->
											</li>
											<li class="has-mega-menu">
													<a href="#" title="">
															<img src="./images/icons/clothes.png" class="img-submenu-mobile" alt="">
														<p class="menu-item">Thời trang</p></a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
														</div><!-- /.row -->
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div><!-- /.row -->
													</div><!-- /.submenu -->
											</li>
											<li class="has-mega-menu">
													<a href="#" title="">
															<img src="./images/icons/bed.png" class="img-submenu-mobile" alt="">
													<p class="menu-item">Đồ gia dụng</p>	</a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
														</div><!-- /.row -->
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div><!-- /.row -->
													</div><!-- /.submenu -->
											</li>
											<li class="has-mega-menu">
													<a href="#" title=""><img src="./images/icons/sport.png" class="img-submenu-mobile" alt="">
														<p class="menu-item">Thể thao</p></a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
														</div><!-- /.row -->
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt="">
																		</a>
																	</div>
																</div>
															</div>
														</div><!-- /.row -->
													</div><!-- /.submenu -->
											</li>
											<li class="has-mega-menu">
													<a href="#" title=""><img src="./images/icons/baby.png" class="img-submenu-mobile" alt="">
														<p class="menu-item">Đồ cho bé</p></a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div><!-- /.col-lg-3 col-md-12 -->
														</div><!-- /.row -->
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
											</li>
											<li class="has-mega-menu">
													<a href="#" title="">
															<img src="./images/icons/giadung.png" class="img-submenu-mobile" alt=""/>
															<p class="menu-item">Phụ kiện</p></a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div>
														</div>
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
											</li>
											<li class="has-mega-menu">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""><p class="menu-item">Đồ gia dụng</p></a>
													<div class="submenu">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại &amp; Phụ Kiện</div>
																	</div>
																</a>
																
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuDongho.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Đồng hồ</div>
																		</div>
																	</a>
																	
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuLaptop.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Laptop</div>
																		</div>
																	</a>
																	
															</div>
															<div class="col-lg-3 col-md-12 col-6">
																	<a class="home-category-list__category-grid" href="">
																		<div class="home-category-list__category-grid-content">
																			<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																				<img class="lazy-image__image" src='./images/logos/subMenuThietbi.jpg'>
																			</img>
																			</div>
																			<div class="home-category-list__category-grid-name">Thiết bị khác</div>
																		</div>
																	</a>
																	
															</div>
														</div>
														<div class="row">
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">	
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-01.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="banner-box">
																	<div class="inner-box">
																		<a href="#" title="">
																			<img src="./images/banner_boxes/submenu-02.png" alt=""/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
											</li>
											<li class="has-mega-menu mobile">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Liên hệ</p></a>
											</li>
											<li class="has-mega-menu mobile">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Hỗ trợ</p></a>
											</li>
											<li class="has-mega-menu mobile">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Kiểm tra</p></a>
											</li>
											<li class="has-mega-menu mobile">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Giao dịch</p></a>
											</li>
											<li class="has-mega-menu mobile">
													<a href="#" title="">
															<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Đăng nhập</p></a>
											</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-menu">
                                    <span></span>
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