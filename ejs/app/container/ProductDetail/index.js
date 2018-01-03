import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from './action';
import ProductContent from '../../components/ProductDetail/ProductContent';
import Produce from '../../components/Home/Produce';

class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                <ProductContent/>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    fetchProduct,
})

export default connect(null, mapDispatchToProps)(ProductDetail);