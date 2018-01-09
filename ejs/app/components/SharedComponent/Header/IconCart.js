import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class IconCart extends React.Component {
    state = {
        success: false,
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ success : true });
    }

    render() {
        return (
            <div className="dropdown-box mobile">
                <ul>
                    { this.state.success && 
                        this.props.item.map((e,index) => <Item item={e} key={index}/>)
                    }
                </ul>
                <div className="total">
                    <span>Subtotal:</span>
                    <span className="price"></span>
                </div>
                <div className="btn-cart">
                    <a href="shop-cart.html" className="view-cart" title="">View Cart</a>
                    <a href="shop-checkout.html" className="check-out" title="">Checkout</a>
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