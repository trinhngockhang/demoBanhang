import React from 'react';
import Menu from './Menu';
import HeaderMobile from './HeaderMobile';

const Header = (props) => {
	return (
		<div>
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
												<div className="cat-list-search">
													<div className="title">
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
														{props.items.map((item, index) => {
															return (
																<li key={index}>
																	<div className="image">
																		<img src={item.src} alt="" />
																	</div>
																	<div className="info-product">
																		<div className="name">
																			<a href="#" title="">{item.name}</a>
																		</div>
																		<div className="price">
																			<span className="sale">
																				{item.sale}
																			</span>
																			<span className="regular">
																				{item.price}
																			</span>
																		</div>
																	</div>
																</li>
															)
														})}
													</ul>
												</div>
												<div className="box-cat">
													<div className="cat-list-search">
														<div className="title">
															Categories
													</div>
														<ul>
															<li>
																<a href="#">Networking  Internet Devices</a>
															</li>
															<li>
																<a href="#">Laptops, Desktops  Monitors</a>
															</li>
															<li>
																<a href="#">Hard Drives  Memory Cards</a>
															</li>
															<li>
																<a href="#">Printers  Ink</a>
															</li>
															<li>
																<a href="#">Networking  Internet Devices</a>
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
										<a href="#" title="">
											<div className="icon-cart">
												<img src="./images/icons/cart.png" alt="" />
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
						</div>
					</div>
				</div>
				<Menu items={props.items} electric={props.electric} electricAds={props.electricAds}/>
				
			</section>
			<HeaderMobile/>
		</div>
	)
}

export default Header;