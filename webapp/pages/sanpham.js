import React from 'react';
import connect from '../store';
import PageWrapper from '../layouts';
import ProductContent from '../components/Product';

class Product extends React.Component {
    static async getInitialProps({ store, query }) {
        const pageid = '5a007c92c846cac15b53ab81';
        const item = await fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&id=${query.id}`).then(r => r.json());
        return { product: item.data }
    }
    render() {
        return (
            <PageWrapper title={ this.props.product.title }>
                <ProductContent product={this.props.product}/>
            </PageWrapper>
        )
    }
}

export default connect(null, null)(Product);