import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

class Receipt extends React.Component {
    state = {
        sub_total: 0,
        price_total: 0,
    }

    componentDidMount() {
        this.setState({  sub_total: localStorage.getItem("sub_total"),price_total: localStorage.getItem("price_total") })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ sub_total: localStorage.getItem("sub_total"), price_total: localStorage.getItem("price_total") });
    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="cart-totals">
                    <h3>Tổng đơn hàng</h3>
                    <form action="#" method="get" acceptCharset="utf-8">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tổng tiền</td>
                                    <td className="subtotal">{this.state.sub_total}</td>
                                </tr>
                                <tr>
                                    <td>Giá ship</td>
                                    <td className="btn-radio">
                                        <div className="radio-info">
                                            <input type="radio" id="flat-rate" defaultChecked name="radio-flat-rate" />
                                            <label htmlFor="flat-rate">Giá(VNĐ): <span>{this.props.flatRate}</span></label>
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
                                    <td className="price-total">{this.state.price_total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="btn-cart-totals">
                            <a href="#" className="update" title="">Cập nhập giỏ hàng</a>
                            <Link href="/dathangonline" className="checkout" title="">Kiểm tra đơn hàng</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sub_total: state.receiptReducers.sub_total,
        flatRate: state.receiptReducers.flatRate,
    }
}

export default connect(mapStateToProps)(Receipt);