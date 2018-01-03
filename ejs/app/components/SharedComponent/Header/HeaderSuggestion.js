import React from 'react';

export default class HeaderSuggestion extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="image">
                                <img src={item.src} alt="" />
                            </div>
                            <div className="info-product">
                                <div className="name">
                                    <a href="#" title="">{item.name}</a>
                                </div>
                                <div className="price">
                                    <span className="sale">
                                        {item.sale}
                                    </span>
                                    <span className="regular">
                                        {item.price}
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