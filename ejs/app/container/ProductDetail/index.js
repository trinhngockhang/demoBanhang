import React from 'react';
import ProductContent from '../../components/ProductDetail/ProductContent';
import HangDaDung from '../../components/Home/HangDaDung';
import BreadCrumb from '../../components/BreadCrumb';

class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <ProductContent/>
                <HangDaDung/>
            </div>
        )
    }
}

export default ProductDetail;