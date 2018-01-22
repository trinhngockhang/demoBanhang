import React from 'react';
import { connect } from 'react-redux';

class Receipt extends React.Component {
    state = {
        shopBasket: [],
        sub_total: 0,
        price_total: 0,
    }

    componentDidMount() {
        this.setState({
            shopBasket: JSON.parse(localStorage.getItem("item")),
            sub_total: localStorage.getItem("sub_total"),
            price_total: localStorage.getItem("price_total"),
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sub_total: localStorage.getItem("sub_total"),
            price_total: localStorage.getItem("price_total"),
            shopBasket: JSON.parse(localStorage.getItem("item"))
        });
    }

    handleClick = e => {
        e.preventDefault();
        if (typeof localStorage["username"] == 'undefined') {
            alert("Bạn phải đăng nhập để đặt hàng");
        } else {
            alert("Đặt hàng thành công");
        }
    }

    render() {
        return (
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
                            {
                                this.state.shopBasket.map((e, idx) => {
                                    return (
                                        <tr>
                                            <td>{e.title}</td>
                                            <td>{e.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tổng</td>
                                <td className="subtotal">{this.state.sub_total}</td>
                            </tr>
                            <tr>
                                <td>Tiền ship</td>
                                <td className="btn-radio">
                                    <div className="radio-info">
                                        <input type="radio" defaultChecked id="flat-rate" name="radio-flat-rate" />
                                        <label htmlFor="flat-rate">Giá/Km: <span>{this.props.flatRate}</span></label>
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
                                <td className="price-total">{this.state.price_total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-radio style2">
                        <div className="checkbox">
                            <input type="checkbox" id="checked-order" name="checked-order" defaultChecked />
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
                        <input type="checkbox" id="checked-order" name="checked-order" defaultChecked />
                        <label htmlFor="checked-order">Tôi chấp nhận điều khoản trên*</label>
                    </div>
                    <div className="btn-order">
                        <a href="#" onClick={e => this.handleClick(e)}>Đặt hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.appReducer.item,
        flatRate: state.appReducer.flatRate,
    }
}

export default connect(mapStateToProps)(Receipt);