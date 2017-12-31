import React from 'react';
import { connect } from 'react-redux';
import { fetchInfoItem } from '../../container/App/action';

class DisplayProduce extends React.Component {
    onClick(e, item) {
        e.preventDefault();
        this.props.fetchInfoItem(item, item.regular);        
    }

    render() {
        return (
            <div className="imagebox style4" >
            <div className="box-image">
                <a href="#" title="">
                    <img src={this.props.item.src} alt="" />
                </a>
            </div>
            <div className="box-content">
                <div className="cat-name">
                    <a href="#" title="">{this.props.item.catName}</a>
                </div>
                <div className="product-name">
                    <a href="#" title="">{this.props.item.produceName}<br />{this.props.item.productName1}</a>
                </div>
                <div className="price">
                    <span className="sale">{this.props.item.sale}</span>
                    <span className="regular">{this.props.item.regular}</span>
                </div>
            </div>
            <div className="box-cart style2 home">
                <div className="btn-add-cart home">
                    <a href="#" title="" onClick={(e) => this.onClick(e, this.props.item)}><img src="./images/icons/add-cart.png" alt="" />Mua</a>
                </div>
            </div>
        </div>
        )
    }
} 

const mapDispatchToProps = ({
    fetchInfoItem,
})

export default connect(null,mapDispatchToProps)(DisplayProduce);