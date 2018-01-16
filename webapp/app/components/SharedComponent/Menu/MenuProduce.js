import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct } from '../../../container/ProductDetail/action';

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
                                            <a href={`/product/${item.id}`}><img className="lazy-image__image" src={item.image_url}/></a>
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

const mapDispatchToProps = ({
    fetchProduct,
})

export default connect(null, mapDispatchToProps)(MenuProduce);