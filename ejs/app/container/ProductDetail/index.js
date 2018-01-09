import React from 'react';
import ProductContent from '../../components/ProductDetail/ProductContent';
import { connect } from 'react-redux';
import { fetchProduct } from './action';

class ProductDetail extends React.Component {
    state = {
        success: false,
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id, this.props.pageid);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.isLoading) {
            this.setState({ success: true });
        }
    }

    render() {
        return (
            <div>
                { this.state.success && <ProductContent product={this.props.product}/> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.productReducer.product,
        pageid: state.appReducer.pageid,
        isLoading: state.productReducer.isLoading,
        message: state.productReducer.message
    }
}

const mapDispatchToProps = ({
    fetchProduct,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);