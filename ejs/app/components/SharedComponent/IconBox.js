import React from 'react';

export default class IconBox extends React.Component {
	shouldComponentUpdate(nexProps) {
		return false;
	}
	render() {
		return (
			<div>
				<section className="flat-iconbox">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-6">
								<div className="iconbox">
									<div className="box-header">
										<div className="image">
											<img src="images/icons/car.png" alt="" />
										</div>
										<div className="box-title">
											<h3>Worldwide Shipping</h3>
										</div>
									</div>
									<div className="box-content">
										<p>Free Shipping On Order Over $100</p>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-6">
								<div className="iconbox">
									<div className="box-header">
										<div className="image">
											<img src="images/icons/order.png" alt="" />
										</div>
										<div className="box-title">
											<h3>Order Online Service</h3>
										</div>
									</div>
									<div className="box-content">
										<p>Free return products in 30 days</p>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-6">
								<div className="iconbox">
									<div className="box-header">
										<div className="image">
											<img src="images/icons/payment.png" alt="" />
										</div>
										<div className="box-title">
											<h3>Payment</h3>
										</div>
									</div>
									<div className="box-content">
										<p>Secure System</p>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-6">
								<div className="iconbox">
									<div className="box-header">
										<div className="image">
											<img src="images/icons/return.png" alt="" />
										</div>
										<div className="box-title">
											<h3>Return 30 Days</h3>
										</div>
									</div>
									<div className="box-content">
										<p>Free return products in 30 days</p>
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

