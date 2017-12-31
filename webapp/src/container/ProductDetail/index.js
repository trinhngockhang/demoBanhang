import React from 'react';
import ProductContent from '../../components/ProductDetail/ProductContent';
import Produce from '../../components/Home/Produce';
import BreadCrumb from '../../components/BreadCrumb';

class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <ProductContent/>
            </div>
        )
    }
}

export default ProductDetail;