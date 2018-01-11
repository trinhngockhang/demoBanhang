import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BreadCrumb from '../../components/BreadCrumb';
import ShopingBasket from '../../components/Cart';
import Receipt from '../../components/Cart/Receipt';

class Cart extends React.Component {
    state = {
        item : JSON.parse(localStorage.getItem("item")),
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ item: JSON.parse(localStorage.getItem("item"))})
    }

    render() {
        return (
            <div>
                <BreadCrumb />
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
                                            {   this.state.item.map((item, idx) => {
                                                return <ShopingBasket item={item} key={idx}/> 
                                            })}
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
                            <Receipt/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.appReducer.item,
    }
}

export default connect(mapStateToProps)(Cart);