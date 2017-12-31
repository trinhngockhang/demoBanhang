import React from 'react';
import Menu from './Menu';
import HeaderMobile from './HeaderMobile';
import HeaderSuggestion from './HeaderSuggestion';
import IconCart from './IconCart';

class Header extends React.Component {
	shouldComponentUpdate(nextProps) {
		if(this.props.items !== nextProps.items) {
			return true;
		}
		if(this.props.electric !== nextProps.electric) {
			return true;
		}
		if(this.props.electricAds !== nextProps.electricAds) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div>
			<section id="header" className="header">
				<div className="header-top">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<ul>
									<li>
										<a href="faq.html" title="">Hotline: 19001583</a>
									</li>									
								</ul>
							</div>
							<div className="col-md-6 text-right">
								<ul className="flat-support">									
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
							<div className="col-md-2 col-sm-3">
								<div id="logo" className="logo">
									<a href="https://mesi.vn" title="">
										Mesi.vn
									</a>
									<i>Cảm ơn quý khách ! </i>
								</div>
							</div>
							<div className="col-md-8 col-sm-">
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
											<input type="text" name="search" placeholder="Tìm kiếm trên Mesi" />
											<span className="btn-search">
												<button type="submit" className="waves-effect"><img src="./images/icons/search.png" alt="" /></button>
											</span>
											<div className="search-suggestions">
												<div className="box-suggestions">
													<div className="title">
														Search Suggestions
												</div>
													<ul>
														<HeaderSuggestion items={this.props.items}/>
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
							<div className="col-md-2 col-sm-3">
								<div className="box-cart">
									<div className="inner-box">
										<a href="#" title="">
											<div className="icon-cart">
												<img src="./images/icons/cart.png" alt="" />
												<span>4</span>
											</div>
											{/* <div className="price">
												$0.00
										</div> */}
										</a>
										<IconCart/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Menu items={this.props.items} electric={this.props.electric} electricAds={this.props.electricAds}/>
				
			</section>
			<HeaderMobile/>
		</div>
		)
	}
}

export default Header;