import React from 'react';
import { connect } from 'react-redux';


class IconCart extends React.Component {
    render() {
        return (
            <div className="dropdown-box mobile">
                <ul>
                    
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


export default IconCart;