import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class IconCart extends React.Component {
    state = {
        data: JSON.parse(localStorage.getItem('data')),
        total: localStorage.getItem('total'),
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({data: JSON.parse(localStorage.getItem('data')), total: localStorage.getItem('total')})
    }

    render() {
        const items = this.state.data.map((item, idx) => {
            return <Item key={idx} item={item}/>
        })
        return (
            <div className="dropdown-box mobile">
                <ul>
                    {localStorage.getItem('isLoading') ? items : null}
                </ul>
                <div className="total">
                    <span>Subtotal:</span>
                    <span className="price">{this.state.total}</span>
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
    }
}

export default connect(mapStateToProps)(IconCart);