import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../container/App/action';

class Item extends React.PureComponent{
    render() {
        const props = this.props.item;
        return (
            <li>
                <div className="img-product">
                    <img src={this.props.item.src} alt="" />
                </div>
                <div className="info-product">
                    <div className="name">
                        {this.props.item.productName}<br />{this.props.item.productName1}
                    </div>
                    <div className="price">
                        <span>1 x</span>
                        <span>{this.props.item.regular}</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <span className="delete" onClick={() => this.props.removeItem(props, props.regular)}>x</span>
            </li>
        )
    }
}

const mapDispatchToProps = ({
    removeItem,
})

export default connect(null, mapDispatchToProps)(Item);