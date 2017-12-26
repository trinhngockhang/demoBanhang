import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="widget-ft widget-about">
                                    <div className="logo logo-ft">
                                        <a href="index.html" title="">
                                            <img src="images/logos/logo.png" alt="" />
                                        </a>
                                    </div>
                                    <ul className="social-list">
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-dribbble" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-google" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="widget-ft widget-categories-ft">
                                    <div className="widget-title">
                                        <h3>Find By Categories</h3>
                                    </div>
                                    <ul className="cat-list-ft">
                                        <li>
                                            <a href="#" title="">Desktops</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Laptops &amp; Notebooks</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Components</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Tablets</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Software</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Phones &amp; PDAs</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">Cameras</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="widget-ft widget-menu">
                                    <div className="widget-title">
                                        <h3>Customer Care</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                Contact us
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Site Map
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                My Account
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Wish List
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Delivery Information
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Privacy Policy
									</a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Terms &amp; Conditions
									</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="widget-ft widget-newsletter">
                                    <div className="widget-title">
                                        <h3>Sign Up To New Letter</h3>
                                    </div>
                                    <p>Make sure that you never miss our interesting <br />
                                        news by joining our newsletter program
							</p>
                                    <form action="#" className="subscribe-form" method="get" acceptCharset="utf-8">
                                        <div className="subscribe-content">
                                            <input type="text" name="email" className="subscribe-email" placeholder="Your E-Mail" />
                                            <button type="submit"><img src="./images/icons/right-2.png" alt="" /></button>
                                        </div>
                                    </form>
                                    <ul className="pay-list">
                                        <li>
                                            <a href="#" title="">
                                                <img src="./images/logos/ft-01.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <img src="./images/logos/ft-02.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <img src="./images/logos/ft-03.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <img src="./images/logos/ft-04.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <img src="./images/logos/ft-05.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="widget widget-apps">
                                    <div className="widget-title">
                                        <h3>Mobile Apps</h3>
                                    </div>
                                    <ul className="app-list">
                                        <li className="app-store">
                                            <a href="#" title="">
                                                <div className="img">
                                                    <img src="./images/icons/app-store.png" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4>App Store</h4>
                                                    <p>Available now on the</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="google-play">
                                            <a href="#" title="">
                                                <div className="img">
                                                    <img src="./images/icons/google-play.png" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4>Google Play</h4>
                                                    <p>Get in on</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <section className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="copyright"> All Rights Reserved © Techno Store 2017</p>
                                <p className="btn-scroll">
                                    <a href="#" title="">
                                        <img src="./images/icons/top.png" alt="" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}