import React from 'react';
import { connect } from 'react-redux';

class DisplayProduce extends React.Component {
    render() {
        return (
            <div className="" >
                <div className="">
                    <a href="#" title="">
                        <img src={this.props.item.image_url} alt="" />
                    </a>
                </div>
                <div className="">
                    <div className="">
                        <a href="#" title="">{this.props.item.title}</a>
                    </div>
                    <div className="">
                        <a href="#" title="">{this.props.item.subtitle}<br /></a>
                    </div>
                    <div className="">
                        <span className="">{this.props.item.price}</span>
                        <span className="">{this.props.item.quantity}</span>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <a href="#" title=""><img src="./images/icons/add-cart.png" alt="" />Mua</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayProduce;