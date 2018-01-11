import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class IconCart extends React.Component {
    state = {
        success: false,
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem("item"))) {
            this.setState({ success: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ success: true });
    }

    render() {
        return (
            <div className="inner-box">
                <a href="#" title="">
                    <div className="icon-cart">
                        <img src="./images/icons/cart.png" alt="" />
                        <span>{ localStorage.getItem("count") }</span>
                    </div>
                </a>
                <div className="dropdown-box mobile">
                    <ul>{   this.state.success &&
                            JSON.parse(localStorage.getItem("item")).map((e, index) => <Item item={e} key={index} />)
                        }
                    </ul>
                    <div className="total">
                        <span>Subtotal:</span>
                        <span className="price">{ localStorage.getItem("sub_total") }</span>
                    </div>
                    <div className="btn-cart">
                        <a href="/cart" className="view-cart" title="">View Cart</a>
                        <a href="/checkout" className="check-out" title="">Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.appReducer.item,
        sub_total: state.appReducer.sub_total,
    }
}

export default connect(mapStateToProps)(IconCart);