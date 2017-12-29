import React from 'react';

const Header = (props) => {
	return (
		<div>
			<section id="header" class="header">
				<div class="header-top">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-right">
								<ul class="flat-support">
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
				<div class="header-middle">
					<div class="container">
						<div class="row">
							<div class="col-md-3 col-sm-3">
								<div id="logo" class="logo">
									<a href="index.html" title="">
										<img src="./images/logos/logo.png" alt=""/>
									</a>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="top-search">
									<form action="#" method="get" class="form-search" accept-charset="utf-8">
										<div class="cat-wrap">
											<select name="category">
												<option hidden value="">Danh mục</option>
												<option hidden value="">Điện thoại</option>
												<option hidden value="">Máy tính</option>
												<option hidden value="">Laptops</option>
											</select>
											<span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
											<div class="all-categories">
												<div class="cat-list-search">
													<div class="title">
														Electronics
													</div>
													<ul>
														<li>Components</li>
														<li>Laptop</li>
														<li>Monitor</li>
														<li>Mp3 player</li>
														<li>Scanners</li>
													</ul>
												</div>
												<div class="cat-list-search">
													<div class="title">
														Furniture
													</div>
													<ul>
														<li>Bookcases</li>
														<li>Barstools</li>
														<li>TV stands</li>
														<li>Desks</li>
														<li>Accent chairs</li>
													</ul>
												</div>
												<div class="cat-list-search">
													<div class="title">
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
										<div class="box-search">
											<input type="text" name="search" placeholder="Bạn cần tìm gì ?"/>
											<span class="btn-search">
												<button type="submit" class="waves-effect"><img src="./images/icons/search.png" alt=""/></button>
											</span>
											<div class="search-suggestions">
												<div class="box-suggestions">
													<div class="title">
														Search Suggestions
													</div>
													<ul>
														<li>
															<div class="image">
																<img src="./images/product/other/s05.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Razer RZ02-01071500-R3M1</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$50.00
																	</span>
																	<span class="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div class="image">
																<img src="./images/product/other/s06.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Notebook Black Spire V Nitro VN7-591G</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$24.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div class="image">
																<img src="./images/product/other/14.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Apple iPad Mini G2356</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$90.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div class="image">
																<img src="./images/product/other/02.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Razer RZ02-01071500-R3M1</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$50.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div class="image">
																<img src="./images/product/other/l01.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Apple iPad Mini G2356</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$24.00
																	</span>
																	<span class="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div class="image">
																<img src="./images/product/other/s08.jpg" alt=""/>
															</div>
															<div class="info-product">
																<div class="name">
																	<a href="#" title="">Beats Snarkitecture Headphones</a>
																</div>
																<div class="price">
																	<span class="sale">
																		$90.00
																	</span>
																	<span class="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
												<div class="box-cat">
													<div class="cat-list-search">
														<div class="title">
															Categories
														</div>
														<ul>
															<li>
																<a href="#">Networking & Internet Devices</a>
															</li>
															<li>
																<a href="#">Laptops, Desktops & Monitors</a>
															</li>
															<li>
																<a href="#">Hard Drives & Memory Cards</a>
															</li>
															<li>
																<a href="#">Printers & Ink</a>
															</li>
															<li>
																<a href="#">Networking & Internet Devices</a>
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
							<div class="col-md-3 col-sm-3">
								<div class="box-cart">
									<div class="inner-box">
										<a href="#" title="">
											<div class="icon-cart">
												<img src="./images/icons/cart.png" alt=""/>
												<span>4</span>
											</div>
											<div class="price">
												$0.00
											</div>
										</a>
										<div class="dropdown-box">
											<ul>
												<li>
													<div class="img-product">
														<img src="./images/product/other/img-cart-1.jpg" alt=""/>
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
														<img src="./images/product/other/img-cart-2.jpg" alt=""/>
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
												<li class="has-mega-menu first" id="focusmeplease">
													<a href="#" title="">
															<img src="./images/icons/computer.png" class="img-submenu-mobile" alt=""/>
														<p class="menu-item">Điện tử</p>	
														</a>
													<div class="submenu first" id ="menu-first">
														<div class="row">
															<div class="col-lg-3 col-md-12 col-6">
																<a class="home-category-list__category-grid" href="">
																	<div class="home-category-list__category-grid-content">
																		<div class="lazy-image__container home-category-list__category-grid-thumbnail">
																			<img class="lazy-image__image" src='./images/logos/logoSubMenuPhone.jpg'>
																		</img>
																		</div>
																		<div class="home-category-list__category-grid-name">Điện Thoại </div>
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
												<li class="has-mega-menu second">
														<a href="#" title="">
																<img src="./images/icons/clothes.png" class="img-submenu-mobile" alt=""/>
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
												<li class="has-mega-menu second">
														<a href="#" title="">
																<img src="./images/icons/bed.png" class="img-submenu-mobile" alt=""/>
														<p class="menu-item">Đồ gia dụng</p></a>
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
												<li class="has-mega-menu second">
														<a href="#" title=""><img src="./images/icons/sport.png" class="img-submenu-mobile" alt=""/>
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
												<li class="has-mega-menu second">
														<a href="#" title=""><img src="./images/icons/baby.png" class="img-submenu-mobile" alt=""/>
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
												<li class="has-mega-menu second">
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
												<li class="has-mega-menu second">
														<a href="#" title="">
																<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Đồ gia dụng</p></a>
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
												<li class="has-mega-menu second mobile">
														<a href="#" title="">
																<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Liên hệ</p></a>
												</li>
												<li class="has-mega-menu second mobile">
														<a href="#" title="">
																<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Hỗ trợ</p></a>
												</li>
												<li class="has-mega-menu second mobile">
														<a href="#" title="">
																<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Kiểm tra</p></a>
												</li>
												<li class="has-mega-menu second mobile">
														<a href="#" title="">
																<img src="./images/icons/car.png" class="img-submenu-mobile" alt=""/><p class="menu-item">Giao dịch</p></a>
												</li>
												<li class="has-mega-menu second mobile">
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

export default Header;