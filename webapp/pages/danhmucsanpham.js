import React from 'react';
import connect from '../store';
import 'isomorphic-unfetch';
import PageWrapper from '../layouts';
import SideBar from '../components/SharedComponent/SideBar';
import BreadCrumb from '../components/SharedComponent/BreadCrumb';
import Tablet from '../components/Tablet';

class Category extends React.Component {
    static async getInitialProps() {
        const pageid = '5a007c92c846cac15b53ab81';
        const res = await fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=1`).then(r => r.json());

        return { category : res.data };
    }

    render() {
        return (
            <PageWrapper>
                <BreadCrumb />
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <Tablet category={ this.props.category }/>
                        </div>
                    </div>
                </main>
            </PageWrapper>
        )
    }
}

export default connect(null, null)(Category);
