import React from 'react';

export default () => {
    return (
        <div class="col-lg-2 col-md-3 fill-category">
            <div class="sidebar ">
                <div class="widget widget-categories">
                    <div class="widget-title">
                        <h3>Danh mục<span></span></h3>
                    </div>
                    <ul class="cat-list style1 widget-content">
                        <li>
                            <span>Linh kiện<i>(03)</i></span>
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                        <li class="">
                            <span>Máy tính<i>(56)</i></span>
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                            <ul class="cat-child">
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
                <div class="widget widget-price">
                    <div class="widget-title">
                        <h3>Giá<span></span></h3>
                    </div>
                    <div class="widget-content">
                        <p>Giá</p>
                        <div class="price search-filter-input">
                            <div id="slider-range" class="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" ></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span></div>
                            <p class="amount">
                                <input type="text" id="amount" disabled="" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="widget widget-brands">
                    <div class="widget-title">
                        <h3>Thương hiệu<span></span></h3>
                    </div>
                    <div class="widget-content">
                        <form action="#" method="get" accept-charset="utf-8">
                            <input type="text" name="brands" placeholder="Brands Search" />
                        </form>
                        <ul class="box-checkbox scroll">
                            <li class="check-box">
                                <input type="checkbox" id="checkbox1" name="checkbox1" />
                                <label for="checkbox1">Apple <span>(4)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox2" name="checkbox2" />
                                <label for="checkbox2">Samsung <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox3" name="checkbox3" />
                                <label for="checkbox3">HTC <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox4" name="checkbox4" />
                                <label for="checkbox4">LG <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox5" name="checkbox5" />
                                <label for="checkbox5">Dell <span>(1)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox6" name="checkbox6" />
                                <label for="checkbox6">Sony <span>(3)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox7" name="checkbox7" />
                                <label for="checkbox7">Bphone <span>(4)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="checkbox8" name="checkbox8" />
                                <label for="checkbox8">Oppo <span>(4)</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="widget widget-color">
                    <div class="widget-title">
                        <h3>Màu<span></span></h3>
                        <div style="height: 2px"></div>
                    </div>
                    <div class="widget-content">
                        <form action="#" method="get" acceptCharset="utf-8">
                            <input type="text" name="color" placeholder="Color Search" />
                        </form>
                        <div style="height: 5px"></div>
                        <ul class="box-checkbox scroll">
                            <li class="check-box">
                                <input type="checkbox" id="check1" name="check1" />
                                <label for="check1">Đen <span>(4)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check2" name="check2" />
                                <label for="check2">Vàng <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check3" name="check3" />
                                <label for="check3">Trắng <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check4" name="check4" />
                                <label for="check4">Xanh nước biển <span>(2)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check5" name="check5" />
                                <label for="check5">Đỏ <span>(1)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check6" name="check6" />
                                <label for="check6">Hồng <span>(3)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check7" name="check7" />
                                <label for="check7">Xanh lá xanh <span>(4)</span></label>
                            </li>
                            <li class="check-box">
                                <input type="checkbox" id="check8" name="check8" />
                                <label for="check8">Vàng <span>(4)</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="widget widget-banner">
                    <div class="banner-box">
                        <div class="inner-box">
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