import React from 'react';

export default (props) => {
    return (
        <li>
            <div className="img-product">
                <img src={props.item.src} alt="" />
            </div>
            <div className="info-product">
                <div className="name">
                    {props.item.productName}<br />{props.item.productName1}
                </div>
                <div className="price">
                    <span>1 x</span>
                    <span>{props.item.regular}</span>
                </div>
            </div>
            <div className="clearfix"></div>
            <span className="delete">x</span>
        </li>
    )
}