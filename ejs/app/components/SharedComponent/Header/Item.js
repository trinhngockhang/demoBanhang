import React from 'react';

export default (props) => {
    return (
        <li>
            <div className="img-product">
                <img src={props.item.image_url}/>
            </div>
            <div className="info-product">
                <div className="name">
                    {props.item.title}
				</div>
                <div className="price">
                    <span>{props.item.stock} x</span>
                    <span>{props.item.price}</span>
                </div>
            </div>
            <div className="clearfix"></div>
            <span className="delete">x</span>
        </li>
    )
}