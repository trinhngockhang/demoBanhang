import React from 'react';
import { connect } from 'react-redux';
import { subShopingBasket } from '../../../container/App/action';

class Item extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.item !== this.props.item) {
            return true;
        } 
        return false;
    }
    render() {
        return (
            <li>
                <div className="img-product">
                    <img src={this.props.item.image_url}/>
                </div>
                <div className="info-product">
                    <div className="name">
                        {this.props.item.title}
                    </div>
                    <div className="price">
                        <span>{this.props.item.stock} x</span>
                        <span>{this.props.item.price}</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <span className="delete" onClick={() => this.props.subShopingBasket(this.props.item)}>x</span>
            </li>
        )
    }
}

const mapDispatchToProps = ({
    subShopingBasket,
})

export default connect(null, mapDispatchToProps)(Item);