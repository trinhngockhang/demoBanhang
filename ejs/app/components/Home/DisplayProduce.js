import React from 'react';
import { connect } from 'react-redux';
import { shopingBasket, addShopingBasket } from '../../container/App/action';

class DisplayProduce extends React.Component {
    save = (e,item) => {
        e.preventDefault();
        this.props.shopingBasket(item);
        this.props.addShopingBasket(item);
    }
    render() {
        return (
            <div className="imagebox style4" >
                <div className="box-image">
                    <a href="#" title="">
                        <img src={this.props.item.image_url} alt="" />
                    </a>
                </div>
                <div className="box-content">
                    <div className="cat-name">
                        <a href="#" title="">{this.props.item.title}</a>
                    </div>
                    <div className="product-name">
                        <a href="#" title="">{this.props.item.subtitle}<br /></a>
                    </div>
                    <div className="price">
                        <span className="sale">{this.props.item.price}</span>
                        <span className="regular">{this.props.item.quantity}</span>
                    </div>
                </div>
                <div className="box-cart style2 home">
                    <div className="btn-add-cart home">
                        <a href="#" title="" onClick={e => this.save(e, this.props.item)}><img src="./images/icons/add-cart.png" alt="" />Mua</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    shopingBasket,
    addShopingBasket,
})

export default connect(null, mapDispatchToProps)(DisplayProduce);