import React from 'react';
import Link from 'next/link';

class MenuProduce extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.items !== this.props.items) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.items.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-12 col-6" key={index}>
                                <a className="home-category-list__category-grid" href="">
                                    <div className="home-category-list__category-grid-content">
                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                            <Link href={{ pathname: '/sanpham', query: { id: item.id } }}><img className="lazy-image__image" src={item.image_url}/></Link>
                                        </div>
                                        <div className="home-category-list__category-grid-name">{item.title}</div>
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


export default MenuProduce;