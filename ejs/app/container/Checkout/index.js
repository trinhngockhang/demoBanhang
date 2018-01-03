import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';

class Checkout extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb />
                <section className="flat-checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="box-checkout">
                                    <h3 className="title">Kiểm kê</h3>
                                    <div className="checkout-login">
                                        Phản hồi khách hàng? <a href="#" title="">Đăng nhập</a>
                                    </div>
                                    <form action="#" method="get" className="checkout" acceptCharset="utf-8">
                                        <div className="billing-fields">
                                            <div className="fields-title">
                                                <h3>Chi tiết thanh toán</h3>
                                                <span></span>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="fields-content">
                                                <div className="field-row">
                                                    <p className="field-one-half">
                                                        <label htmlFor="first-name">Tên *</label>
                                                        <input type="text" id="first-name" name="first-name" placeholder="...." />
                                                    </p>
                                                    <p className="field-one-half">
                                                        <label htmlFor="last-name">Họ *</label>
                                                        <input type="text" id="last-name" name="last-name" placeholder="......" />
                                                    </p>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="field-row">
                                                    <label htmlFor="company-name">Tên shop</label>
                                                    <input type="text" id="company-name" name="company-name" />
                                                </div>
                                                <div className="field-row">
                                                    <p className="field-one-half">
                                                        <label htmlFor="email-address">Địa chỉ email *</label>
                                                        <input type="email" id="email-address" name="email-address" />
                                                    </p>
                                                    <p className="field-one-half">
                                                        <label htmlFor="phone">Số điện thoại *</label>
                                                        <input type="text" id="phone" name="phone" />
                                                    </p>
                                                    <div className="clearfix"></div>
                                                </div>
                                                {/* <div className="field-row">
                                                    <label>Country *</label>
                                                    <select name="country">
                                                        <option value="">Australia</option>
                                                        <option value="">USA State</option>
                                                        <option value="">Spanish</option>
                                                        <option value="">Viet Nam</option>
                                                    </select>
                                                </div> */}
                                                <div className="field-row">
                                                    <label htmlFor="address">Địa chỉ *</label>
                                                    <input type="text" id="address" name="address" placeholder="Số nhà *" />
                                                    {/* <input type="text" id="address-2" name="address" placeholder="Apartment, suite, unit etc. (optional)" /> */}
                                                </div>
                                                <div className="field-row">
                                                    <label htmlFor="town-city">Town / City *</label>
                                                    <input type="text" id="town-city" name="town-city" />
                                                </div>
                                                <div className="field-row">
                                                    <p className="field-one-half">
                                                        <label htmlFor="state-country">State / County *</label>
                                                        <input type="text" id="state-country" name="state-country" />
                                                    </p>
                                                    <p className="field-one-half">
                                                        <label htmlFor="post-code">Postcode / ZIP *</label>
                                                        <input type="text" id="post-code" name="post-code" />
                                                    </p>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="checkbox">
                                                    <input type="checkbox" id="create-account" name="create-account" checked />
                                                    <label htmlFor="create-account">Tạo tài khoản?</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shipping-address-fields">
                                            <div className="fields-title">
                                                <h3>Địa chỉ giao hàng</h3>
                                                <span></span>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="fields-content">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="create-account-2" name="create-account-2" checked />
                                                    <label htmlFor="create-account-2">Nơi nhận ?</label>
                                                </div>
                                                <div className="field-row">
                                                    <p className="field-one-half">
                                                        <label htmlFor="first-name-2">Tên người nhận *</label>
                                                        <input type="text" id="first-name-2" name="first-name-2" placeholder="Ali" />
                                                    </p>
                                                    {/* <p className="field-one-half">
                                                        <label for="last-name-2">Last Name *</label>
                                                        <input type="text" id="last-name-2" name="last-name-2" placeholder="Tufan" />
                                                    </p> */}
                                                    <div className="clearfix"></div>
                                                </div>
                                                {/* <div className="field-row">
                                                    <label for="company-name-2">Tên shop</label>
                                                    <input type="text" id="company-name-2" name="company-name-2" />
                                                </div> */}
                                                {/* <div className="field-row">
                                                    <label>Country *</label>
                                                    <select name="country-2">
                                                        <option value="">Australia</option>
                                                        <option value="">USA State</option>
                                                        <option value="">Spanish</option>
                                                        <option value="">Viet Nam</option>
                                                    </select>
                                                </div> */}
                                                <div className="field-row">
                                                    <label htmlFor="address-3">Địa chỉ *</label>
                                                    <input type="text" id="address-3" name="address-3" placeholder="Số nhà *" />
                                                    {/* <input type="text" id="address-4" name="address2" placeholder="Apartment, suite, unit etc. (optional)" /> */}
                                                </div>
                                                <div className="field-row">
                                                    <label htmlFor="town-city-2">Town / City *</label>
                                                    <input type="text" id="town-city-2" name="town-city-2" />
                                                </div>
                                                <div className="field-row">
                                                    <p className="field-one-half">
                                                        <label htmlFor="state-country-2">State / County *</label>
                                                        <input type="text" id="state-country-2" name="state-country-2" />
                                                    </p>
                                                    <p className="field-one-half">
                                                        <label htmlFor="post-code-2">Postcode / ZIP *</label>
                                                        <input type="text" id="post-code-2" name="post-code-2" />
                                                    </p>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="field-row">
                                                    <label htmlFor="notes">Chú thích</label>
                                                    <textarea id="notes" placeholder="Mô tả nơi nhận....."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="cart-totals style2">
                                    <h3>Đơn hàng</h3>
                                        <table className="product">
                                            <thead>
                                                <tr>
                                                    <th>Sản phẩm</th>
                                                    <th>Tổng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Apple iPad Mini<br />G2356</td>
                                                    <td>$99.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Beats Pill + Portable<br />Speaker</td>
                                                    <td>$100.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Tổng</td>
                                                    <td className="subtotal">$1,999.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Tiền ship</td>
                                                    <td className="btn-radio">
                                                        <div className="radio-info">
                                                            <input type="radio" checked id="flat-rate" name="radio-flat-rate" />
                                                            <label htmlFor="flat-rate">Giá/Km: <span>$3.00</span></label>
                                                        </div>
                                                        <div className="radio-info">
                                                            <input type="radio" id="free-shipping" name="radio-flat-rate" />
                                                            <label htmlFor="free-shipping">Free Shipping</label>
                                                        </div>
                                                        <div className="btn-shipping">
                                                            <a href="#" title="">Tổng tiền ship</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tổng tiền</td>
                                                    <td className="price-total">$1,999.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="btn-radio style2">
                                            <div className="checkbox">
                                                <input type="checkbox" id="checked-order" name="checked-order" checked />
                                                <label htmlFor="checked-order">Hình thức thanh toán*</label>
                                            </div>
                                            <form>
                                                <div className="radio-info">
                                                    <input type="radio" id="bank-transfer" name="radio-cash-2" />
                                                    <label htmlFor="bank-transfer">Chuyển khoản</label>
                                                </div>
                                                <div className="radio-info">
                                                    <input type="radio" id="cash-delivery" name="radio-cash-2" />
                                                    <label htmlFor="cash-delivery">Thanh toán khi giao hàng</label>
                                                </div>
                                                <div className="radio-info">
                                                    <input type="radio" id="paypal" name="radio-cash-2" />
                                                    <label htmlFor="paypal">Thẻ tín dụng</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="checked-order" name="checked-order" checked />
                                            <label htmlFor="checked-order">Tôi chấp nhận điều khoản trên*</label>
                                        </div>
                                        <div className="btn-order">
                                            <a href="#" className="order" title="">Đặt hàng</a>
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

export default Checkout;