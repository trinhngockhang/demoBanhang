import React from 'react';
import 'isomorphic-unfetch';
import connect from '../store';
import PageWrapper from '../layouts';
import Produce from '../components/Home';
import Advertisment from '../components/Home/Advertisments';

class Home extends React.Component {
    static async getInitialProps({ store }) {
        const pageid = '5a007c92c846cac15b53ab81';
        const response = await fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=1`).then(r => r.json());
        const listId = response.data.map(s => s.id);
        const id = listId[0];
        const result = await fetch(`https://api.botbanhang.vn/v1/webapp/category?pageid=${pageid}&level=2&parent=${id}`).then(r => r.json());
        return { ads: result.data }
    }

    render() {
        return (
            <PageWrapper>         
                <Advertisment />
                <Produce name="Dịch vụ" produce={this.props.ads} />
                <Produce name="Điện tử" produce={this.props.ads} />
            </PageWrapper>
        )
    }
}

export default connect(null, null)(Home);