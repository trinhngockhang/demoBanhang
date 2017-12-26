import React from 'react';

export default class ProductContent extends React.Component {
    render() {
        return (
            <div>
                <section className="flat-product-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li data-thumb="./images/product/flexslider/thumb/2.jpg">
                                            <img src="./images/product/flexslider/l01.jpg" alt="image slider" />
                                            <span>NEW</span>
                                        </li>
                                        <li data-thumb="./images/product/flexslider/thumb/3.jpg">
                                            <img src="./images/product/flexslider/l01.jpg" alt="image slider" />
                                        </li>
                                        <li data-thumb="./images/product/flexslider/thumb/4.jpg">
                                            <img src="./images/product/flexslider/l01.jpg" alt="image slider" />
                                            <span>NEW</span>
                                        </li>
                                        <li data-thumb="./images/product/flexslider/thumb/5.jpg">
                                            <img src="./images/product/flexslider/l01.jpg" alt="image slider" />
                                        </li>
                                        <li data-thumb="./images/product/flexslider/thumb/6.jpg">
                                            <img src="./images/product/flexslider/l01.jpg" alt="image slider" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-detail">
                                    <div className="header-detail">
                                        <h4 className="name">Warch 42 mm Smart Watches</h4>
                                        <div className="category">
                                            Smart Watches
								</div>
                                        <div className="reviewed">
                                            <div className="review">
                                                <div className="queue">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <div className="text">
                                                    <span>3 Reviews</span>
                                                    <span className="add-review">Add Your Review</span>
                                                </div>
                                            </div>
                                            <div className="status-product">
                                                Availablity <span>In stock</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-detail">
                                        <div className="price">
                                            <div className="regular">
                                                $2,999.00
									</div>
                                            <div className="sale">
                                                $1,589.00
									</div>
                                        </div>
                                        <div className="info-text">
                                            Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.
								</div>
                                        <div className="product-id">
                                            SKU: <span className="id">FW511948218</span>
                                        </div>
                                    </div>
                                    <div className="footer-detail">
                                        <div className="quanlity-box">
                                            <div className="colors">
                                                <select name="color">
                                                    <option value="">Select Color</option>
                                                    <option value="">Black</option>
                                                    <option value="">Red</option>
                                                    <option value="">White</option>
                                                </select>
                                            </div>
                                            <div className="quanlity">
                                                <span className="btn-down"></span>
                                                <input type="number" name="number" value="" min="1" max="100" placeholder="Quanlity" />
                                                <span className="btn-up"></span>
                                            </div>
                                        </div>
                                        <div className="box-cart style2">
                                            <div className="btn-add-cart">
                                                <a href="#" title=""><img src="./images/icons/add-cart.png" alt="" />Add to Cart</a>
                                            </div>
                                            <div className="compare-wishlist">
                                                <a href="compare.html" className="compare" title=""><img src="./images/icons/compare.png" alt="" />Compare</a>
                                                <a href="compare.html" className="wishlist" title=""><img src="./images/icons/wishlist.png" alt="" />Wishlist</a>
                                            </div>
                                        </div>
                                        <div className="social-single">
                                            <span>SHARE</span>
                                            <ul className="social-list style2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flat-product-content">
                    <ul className="product-detail-bar">
                        <li className="active">Description</li>
                        <li>Tecnical Specs</li>
                        <li>Reviews</li>
                    </ul>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="description-text">
                                    <div className="box-text">
                                        <h4>Nuqqam Et Massa</h4>
                                        <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="box-text wireless">
                                        <h4>Wireless</h4>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece <br />of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                    </div>
                                    <div className="box-text design">
                                        <h4>Fresh Design</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of <br />a page when looking at its layout. The point of using Lorem Ipsum is that it has a <br />more-or-less normal distribution of letters, as opposed to using</p>
                                    </div>
                                    <div className="box-text sound">
                                        <h4>Fabolous Sound</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the <br />majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="description-image">
                                    <div className="box-image">
                                        <img src="./images/product/single/01.png" alt="" />
                                    </div>
                                    <div className="box-text">
                                        <h4>Nuqqam Et Massa</h4>
                                        <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="different-color">
                                    <div className="title">
                                        Different Colors
							</div>
                                    <p>
                                        Sed sodales sed orci<br />molestie
							</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-left">
                                    <div className="img-line">
                                        <img src="./images/product/single/line-1.png" alt="" />
                                    </div>
                                    <div className="img-product">
                                        <img src="./images/product/single/06.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-right">
                                    <div className="img-line">
                                        <img src="./images/product/single/line-2.png" alt="" />
                                        <img src="./images/product/single/04.png" alt="" />
                                    </div>
                                    <div className="img-product">

                                    </div>
                                    <div className="box-text">
                                        <h4>Nuqqam Et Massa</h4>
                                        <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tecnical-specs">
                                    <h4 className="name">
                                        Warch 42 mm Smart Watches
							</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Height</td>
                                                <td>38.6mm</td>
                                            </tr>
                                            <tr>
                                                <td>Meterial</td>
                                                <td>Stainless Stee</td>
                                            </tr>
                                            <tr>
                                                <td>Case</td>
                                                <td>40g</td>
                                            </tr>
                                            <tr>
                                                <td>Color</td>
                                                <td>blue, gray, green, light blue, lime, purple, red, yellow</td>
                                            </tr>
                                            <tr>
                                                <td>Depth</td>
                                                <td>10.5mm</td>
                                            </tr>
                                            <tr>
                                                <td>Width</td>
                                                <td>33.3mm</td>
                                            </tr>
                                            <tr>
                                                <td>Size</td>
                                                <td>Large, Medium, Small</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="rating">
                                    <div className="title">
                                        Based on 3 reviews
							</div>
                                    <div className="score">
                                        <div className="average-score">
                                            <p className="numb">4.3</p>
                                            <p className="text">Average score</p>
                                        </div>
                                        <div className="queue">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <ul className="queue-box">
                                        <li className="five-star">
                                            <span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span className="numb-star">3</span>
                                        </li>
                                        <li className="four-star">
                                            <span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span className="numb-star">4</span>
                                        </li>
                                        <li className="three-star">
                                            <span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span className="numb-star">3</span>
                                        </li>
                                        <li className="two-star">
                                            <span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span className="numb-star">2</span>
                                        </li>
                                        <li className="one-star">
                                            <span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span className="numb-star">0</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-review">
                                    <div className="title">
                                        Add a review
							</div>
                                    <div className="your-rating queue">
                                        <span>Your Rating</span>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <form action="#" method="get" acceptCharset="utf-8">
                                        <div className="review-form-name">
                                            <input type="text" name="name-author" value="" placeholder="Name" />
                                        </div>
                                        <div className="review-form-email">
                                            <input type="text" name="email-author" value="" placeholder="Email" />
                                        </div>
                                        <div className="review-form-comment">
                                            <textarea name="review-text" placeholder="Your Name"></textarea>
                                        </div>
                                        <div className="btn-submit">
                                            <button type="submit">Add Review</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <ul className="review-list">
                                    <li>
                                        <div className="review-metadata">
                                            <div className="name">
                                                Ali Tufan : <span>April 3, 2016</span>
                                            </div>
                                            <div className="queue">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="review-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="review-metadata">
                                            <div className="name">
                                                Peter Tufan : <span>April 3, 2016</span>
                                            </div>
                                            <div className="queue">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="review-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="review-metadata">
                                            <div className="name">
                                                Jon Tufan : <span>April 3, 2016</span>
                                            </div>
                                            <div className="queue">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="review-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}