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
									<h3>{props.products}</h3>
									<span>
										Showing 1–15 of 20 results
									</span>
									<div className="clearfix"></div>
								</div>
								<div className="sort-product">
									<ul className="icons">
										<li>
											<img src="./images/icons/list-1.png" alt=""/>
										</li>
										<li>
											<img src="./images/icons/list-2.png" alt=""/>
										</li>
									</ul>
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
								<div className="tab-product">
									<div className="row sort-box">
										<div className="col-lg-3 col-sm-6 col-6 no-padding">
											<div className="product-box">
												<div className="imagebox">
													<div className="box-image owl-carousel-1">
														<a href="#" title="">
															<img src="./images/product/other/02.jpg" alt=""/>
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
																<img src="./images/icons/add-cart.png" alt=""/>Mua
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="sort-box">
										<div className="product-box style3">
											<div className="imagebox style1 v3">
												<div className="box-image">
													<a href="#" title="">
														<img src="./images/product/other/04-v3.jpg" alt=""/>
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
															<img src="./images/icons/add-cart.png" alt=""/>Mua
														</a>
													</div>	
												</div>
											</div>
										</div>
										<div style={{height: '9px'}}></div>
									</div> */}
								</div>
							</div>
							<div className="blog-pagination">
								<span>
									Showing 1–15 of 20 results
								</span>
								<ul className="flat-pagination style1">
									<li className="prev">
										<a href="#" title="">
											<img src="./images/icons/left-1.png" alt=""/>Prev Page
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
											Next Page<img src="./images/icons/right-1.png" alt=""/>
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