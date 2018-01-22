import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Item from './Item';

class IconCart extends React.Component {
    state = {
        success: false,
        count: 0,
        sub_total: 0,
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem("item"))) {
            this.setState({ success: true });
        }
        this.setState({count: localStorage.getItem("count"), sub_total: localStorage.getItem("sub_total")});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({count: localStorage.getItem("count"), sub_total: localStorage.getItem("sub_total")});
    }

    render() {
        return (
            <div className="inner-box">
                <a href="#" title="">
                    <div className="icon-cart">
                        <img src="/static/images/icons/cart.png" alt="" />
                        <span>{ this.state.count }</span>
                    </div>
                </a>
                <div className="dropdown-box mobile">
                    <ul>{   this.state.success &&
                            JSON.parse(localStorage.getItem("item")).map((e, index) => <Item item={e} key={index} />)
                        }
                    </ul>
                    <div className="total">
                        <span>Subtotal:</span>
                        <span className="price">{ this.state.sub_total }</span>
                    </div>
                    <div className="btn-cart">
                        <Link href="/giohang" className="view-cart" title="">View Cart</Link>
                        <Link href="/dathangonline" className="check-out" title="">Checkout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.receiptReducers.item,
        sub_total: state.receiptReducers.sub_total,
    }
}


export default connect(mapStateToProps)(IconCart);