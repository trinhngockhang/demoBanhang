import React from 'react';
import connect from '../store';
import PageWrapper from '../layouts';
import Receipt from '../components/Checkout';
import BreadCrumb from '../components/SharedComponent/BreadCrumb';

class Checkout extends React.Component {
    render() {
        return (
            <PageWrapper>
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
                                                    <input type="checkbox" id="create-account" name="create-account" defaultChecked />
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
                                                    <input type="checkbox" id="create-account-2" name="create-account-2" defaultChecked />
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
                            <Receipt />
                        </div>
                    </div>
                </section>
            </PageWrapper>
        )
    }
}

export default connect(null, null)(Checkout);