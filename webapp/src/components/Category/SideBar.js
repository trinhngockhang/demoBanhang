import React from 'react';

export default () => {
    return (
        <div className="col-lg-2 col-md-3 fill-category">
            <div className="sidebar ">
                <div className="widget widget-categories">
                    <div className="widget-title">
                        <h3>Danh mục<span></span></h3>
                    </div>
                    <ul className="cat-list style1 widget-content">
                        <li>
                            <span>Linh kiện<i>(03)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">TV</a>
                                </li>
                                <li>
                                    <a href="#" title="">Monitors</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Cameras<i>(19)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Go Pro</a>
                                </li>
                                <li>
                                    <a href="#" title="">Máy quay phim</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <span>Máy tính<i>(56)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Desktop</a>
                                </li>
                                <li>
                                    <a href="#" title="">Màn hình</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Laptops<i>(03)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Desktop</a>
                                </li>
                                <li>
                                    <a href="#" title="">Màn hình</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Mạng<i>(03)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Monitors</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Sản phẩm cũ<i>(89)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Monitors</a>
                                </li>
                                <li>
                                    <a href="#" title="">Phần mềm</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Điện thoại di động<i>(90)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Apple</a>
                                </li>
                                <li>
                                    <a href="#" title="">HTC</a>
                                </li>
                                <li>
                                    <a href="#" title="">Sony</a>
                                </li>
                                <li>
                                    <a href="#" title="">Samsung</a>
                                </li>
                                <li>
                                    <a href="#" title="">LG</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Phần mềm<i>(23)</i></span>
                            <ul className="cat-child">
                                <li>
                                    <a href="#" title="">Desktop</a>
                                </li>
                                <li>
                                    <a href="#" title="">Quản lý</a>
                                </li>
                                <li>
                                    <a href="#" title="">BKAV</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="widget widget-price">
                    <div className="widget-title">
                        <h3>Giá<span></span></h3>
                    </div>
                    <div className="widget-content">
                        <p>Giá</p>
                        <div className="price search-filter-input">
                            <div id="slider-range" className="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" ></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span></div>
                            <p className="amount">
                                <input type="text" id="amount" disabled="" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="widget widget-brands">
                    <div className="widget-title">
                        <h3>Thương hiệu<span></span></h3>
                    </div>
                    <div className="widget-content">
                        <form action="#" method="get" acceptCharset="utf-8">
                            <input type="text" name="brands" placeholder="Brands Search" />
                        </form>
                        <ul className="box-checkbox scroll">
                            <li className="check-box">
                                <input type="checkbox" id="checkbox1" name="checkbox1" />
                                <label htmlFor="checkbox1">Apple <span>(4)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox2" name="checkbox2" />
                                <label htmlFor="checkbox2">Samsung <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox3" name="checkbox3" />
                                <label htmlFor="checkbox3">HTC <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox4" name="checkbox4" />
                                <label htmlFor="checkbox4">LG <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox5" name="checkbox5" />
                                <label htmlFor="checkbox5">Dell <span>(1)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox6" name="checkbox6" />
                                <label htmlFor="checkbox6">Sony <span>(3)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox7" name="checkbox7" />
                                <label htmlFor="checkbox7">Bphone <span>(4)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="checkbox8" name="checkbox8" />
                                <label htmlFor="checkbox8">Oppo <span>(4)</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-color">
                    <div className="widget-title">
                        <h3>Màu<span></span></h3>
                        <div style={{height: "2px"}}></div>
                    </div>
                    <div className="widget-content">
                        <form action="#" method="get" acceptCharset="utf-8">
                            <input type="text" name="color" placeholder="Color Search" />
                        </form>
                        <div style={{height: '5px'}}></div>
                        <ul className="box-checkbox scroll">
                            <li className="check-box">
                                <input type="checkbox" id="check1" name="check1" />
                                <label htmlFor="check1">Đen <span>(4)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check2" name="check2" />
                                <label htmlFor="check2">Vàng <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check3" name="check3" />
                                <label htmlFor="check3">Trắng <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check4" name="check4" />
                                <label htmlFor="check4">Xanh nước biển <span>(2)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check5" name="check5" />
                                <label htmlFor="check5">Đỏ <span>(1)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check6" name="check6" />
                                <label htmlFor="check6">Hồng <span>(3)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check7" name="check7" />
                                <label htmlFor="check7">Xanh lá xanh <span>(4)</span></label>
                            </li>
                            <li className="check-box">
                                <input type="checkbox" id="check8" name="check8" />
                                <label htmlFor="check8">Vàng <span>(4)</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-banner">
                    <div className="banner-box">
                        <div className="inner-box">
                            <a href="#" title="">
                                <img src="./images/banner_boxes/06.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}