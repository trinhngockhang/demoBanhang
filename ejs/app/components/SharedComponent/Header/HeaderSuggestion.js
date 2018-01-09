import React from 'react';

export default class HeaderSuggestion extends React.Component {
    shouldComponentUpdate(nexpProps) {
        if(nexpProps.items !== this.props.items) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="image">
                                <img src={item.image_url} alt="" />
                            </div>
                            <div className="info-product">
                                <div className="name">
                                    <a href="#" title="">{item.title}</a>
                                </div>
                                <div className="price">
                                    <span className="sale">
                                        {item.price}
                                    </span>
                                    <span className="regular">
                                        {item.quantity}
                                    </span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </div>
        )
    }
}