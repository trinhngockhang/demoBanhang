import React from 'react';
import 'isomorphic-unfetch';
import connect from '../store';
import SideBar from '../components/SharedComponent/SideBar';
import PageWrapper from '../layouts';
import InfoShop from '../components/Shop';
import BreadCrumb from '../components/SharedComponent/BreadCrumb';
import Tablet from '../components/Tablet';

class Shop extends React.Component {
    static async getInitialProps({ query }) {
        const res = await fetch(`https://api.botbanhang.vn/v1/webapp/page?id=${query.pageid}`).then(r => r.json());
        const category = await fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${query.pageid}&level=1`).then(r => r.json());

        return { shop: res.data.page, title: res.data.name, category: category.data }
    }

    render() {
        return (
            <PageWrapper title={ this.props.title }>
                <InfoShop shop={ this.props.shop }/>
                <BreadCrumb />
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <Tablet title={ this.props.title } category={ this.props.category }/>
                        </div>
                    </div>
                </main>
            </PageWrapper>
        )
    }
}

export default connect(null, null)(Shop);