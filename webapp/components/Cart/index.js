import React from 'react';
import { connect } from 'react-redux';
import { shopingBasket, addShopingBasket, subShopingBasket } from '../../actions';

class ShopingBasket extends React.Component {
    state = {
        stock: this.props.item.stock,
        total: parseInt(this.props.item.price)*parseInt(this.props.item.stock),
        disable: false,
    }

    componentWillReceiveProps(nextProps) {
        this.setState({stock: nextProps.item.stock, total: parseInt(this.props.item.price)*parseInt(nextProps.item.stock)})
    }

    add = (item) => {
        this.props.shopingBasket(item);
        this.props.addShopingBasket(item);
    }

    minus = (item) => {
        this.props.shopingBasket(item);
        this.props.subShopingBasket(item);
    }

    render() {
        return (
            <tr>
                <td>
                    <div className="img-product">
                        <img src={ this.props.item.image_url } alt={ this.props.item.title } />
                    </div>
                    <div className="name-product">
                        { this.props.item.title }<br />
                    </div>
                    <div className="price">
                        { this.props.item.price }
                    </div>
                    <div className="clearfix"></div>
                </td>
                <td>
                    <div className="quanlity">
                        <span className="btn-down" onClick={() => this.minus(this.props.item)}></span>
                        <input type="text" name="number" value={this.state.stock} readOnly />
                        <span className="btn-up" onClick={() => this.add(this.props.item)}></span>
                    </div>
                </td>
                <td>
                    <div className="total">
                        { this.state.total }
                    </div>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.receiptReducers.item,
        sub_total: state.receiptReducers.sub_total,
    }
}

const mapDispatchToProps = ({
    shopingBasket,
    addShopingBasket,
    subShopingBasket,
})

export default connect(null, mapDispatchToProps)(ShopingBasket);