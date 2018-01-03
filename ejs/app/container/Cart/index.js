import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <section className="flat-shop-cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="flat-row-title style1">
                                    <h3>Giỏ hàng</h3>
                                </div>
                                <div className="table-cart">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Tổng</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="img-product">
                                                        <img src="./images/product/other/12.jpg" alt="" />
                                                    </div>
                                                    <div className="name-product">
                                                        Apple iPad Mini <br />G2356
											</div>
                                                    <div className="price">
                                                        $1,250.00
											</div>
                                                    <div className="clearfix"></div>
                                                </td>
                                                <td>
                                                    <div className="quanlity">
                                                        <span className="btn-down"></span>
                                                        <input type="number" name="number" defaultValue="5" min="1" max="100" placeholder="Quanlity" />
                                                        <span className="btn-up"></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="total">
                                                        $6,250.00
											</div>
                                                </td>
                                                <td>
                                                    <a href="#" title="">
                                                        <img src="./images/icons/delete.png" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="img-product">
                                                        <img src="./images/product/other/11.jpg" alt="" />
                                                    </div>
                                                    <div className="name-product">
                                                        Beats Pill+ Portable<br />Speaker
											</div>
                                                    <div className="price">
                                                        $1,250.00
											</div>
                                                    <div className="clearfix"></div>
                                                </td>
                                                <td>
                                                    <div className="quanlity">
                                                        <span className="btn-down"></span>
                                                        <input type="number" name="number" defaultValue="5" min="1" max="100" placeholder="Quanlity" />
                                                        <span className="btn-up"></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="total">
                                                        $6,250.00
											</div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <img src="./images/icons/delete.png" alt="" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-coupon">
                                        <form action="#" method="get" acceptCharset="utf-8">
                                            <div className="coupon-input">
                                                <input type="text" name="coupon code" placeholder="Mã giảm giá" />
                                                <button type="submit">Phiếu giảm giá</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart-totals">
                                    <h3>Tổng đơn hàng</h3>
                                    <form action="#" method="get" acceptCharset="utf-8">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Tổng tiền</td>
                                                    <td className="subtotal">$2,589.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Giá ship</td>
                                                    <td className="btn-radio">
                                                        <div className="radio-info">
                                                            <input type="radio" id="flat-rate" defaultChecked name="radio-flat-rate" />
                                                            <label htmlFor="flat-rate">Giá/Km: <span>$3.00</span></label>
                                                        </div>
                                                        <div className="radio-info">
                                                            <input type="radio" id="free-shipping" name="radio-flat-rate" />
                                                            <label htmlFor="free-shipping">Miễn phí giao hàng</label>
                                                        </div>
                                                        <div className="btn-shipping">
                                                            <a href="#" title="">Tổng giá</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tổng</td>
                                                    <td className="price-total">$1,591.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="btn-cart-totals">
                                            <a href="#" className="update" title="">Cập nhập giỏ hàng</a>
                                            <Link to="/checkout" className="checkout" title="">Kiểm tra đơn hàng</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cart;