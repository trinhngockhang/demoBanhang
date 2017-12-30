import React from 'react';

export default class MenuProduce extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.electric !== this.props.electric) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.electric.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-12 col-6" key={index}>
                                <a className="home-category-list__category-grid" href="">
                                    <div className="home-category-list__category-grid-content">
                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                            <img className="lazy-image__image" src={item.src}>
                                            </img>
                                        </div>
                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}