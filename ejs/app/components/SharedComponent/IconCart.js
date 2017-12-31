import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class IconCart extends React.Component {
    state = {
        data: [],
        success: false,
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.data !== this.props.data) {
            this.setState({ data: nextProps.data, success: true })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.data !== this.state.data) {
            return true;
        }
        return false;
    }

    render() {
        const items = this.state.data.map((item, idx) => {
            return <Item item={item} key={idx} count={this.props.count}/>
        })
        return (
            <div className="dropdown-box mobile">
                <ul>
                    {this.state.success ? items : null}
                </ul>
                <div className="total">
                    <span>Subtotal:</span>
                    <span className="price">{this.props.total}</span>
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
        data: state.appReducer.data,
        isLoading: state.appReducer.isLoading,
        total: state.appReducer.total,
    }
}

export default connect(mapStateToProps)(IconCart);