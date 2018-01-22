import React from 'react';
import { connect } from 'react-redux';
import { loadAds } from '../../actions';
import 'isomorphic-unfetch';
import HeaderMobile from './HeaderMobile';
import HeaderSuggestion from './HeaderSuggestion';
import Menu from '../Menu';
import IconCart from './IconCart';

class Header extends React.Component {

	state = {
		success: false,
		isLogin: false,
	}

	componentDidMount() {
		this.props.loadAds('5a007c92c846cac15b53ab81');
		window.fbAsyncInit = function () {
			FB.init({
				appId: '553865588295754',
				cookie: true,  // enable cookies to allow the server to access
				// the session
				xfbml: true,  // parse social plugins on this page
				version: 'v2.11' // use version 2.1
			});
			FB.getLoginStatus(function (response) {
				this.statusChangeCallback(response);
			}.bind(this));
		}.bind(this);
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	testAPI = () => {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function (response) {
			localStorage.getItem("username", response.name);
			console.log('Successful login for: ' + response.name);
		});
	}

	// This is called with the results from from FB.getLoginStatus().
	statusChangeCallback = (response) => {
		if (response.status === 'connected') {
			this.setState({ isLogin: true })
			this.testAPI();
		}
	}
	checkLoginState = () => {
		FB.getLoginStatus(function (response) {
			this.statusChangeCallback(response);
		}.bind(this));
	}


	handleClick = () => {
		FB.login(this.checkLoginState());
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ success: true });
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.ads !== this.props.ads) {
			return true;
		}
		return false;
	}

	render() {
		const filter = this.state.isLogin ? null : "Đăng nhập";
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
											<a href="#" onClick={this.handleClick}>{filter}</a>
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
													<button type="submit" className="waves-effect"><img src="/static/images/icons/search.png" alt="" /></button>
												</span>
												<div className="search-suggestions">
													<div className="box-suggestions">
														<div className="title">
															Search Suggestions
												</div>
														<ul>
															{
																this.state.success && <HeaderSuggestion items={this.props.ads} />
															}
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
										<IconCart />
									</div>
								</div>
							</div>
						</div>
					</div>
					{ this.state.success && <Menu items={this.props.ads} /> }
				</section>
				<HeaderMobile />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		ads: state.advertisementReducer.ads,
	}
}

const mapDispatchToProps = ({
	loadAds,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

///