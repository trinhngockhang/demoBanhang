import React from 'react';
import 'isomorphic-unfetch';
import PageWrapper from '../layouts';
import Header from '../components/Header';
import Footer from '../components/SharedComponent/Footer';
import Produce from '../components/Home';
import Advertisment from '../components/Home/Advertisments';

class Home extends React.Component {  
    static async getInitialProps () {
        const res = await fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=5a007c92c846cac15b53ab81&level=2&parent=5a008022c846cac15b53ab98');
        const json = await res.json();
        return { json };
    }
    render() {
        const items = Object.values(this.props.json).map(s => s);
        return (
            <PageWrapper>
                <Header categoryLevel2={items}/>
                <Advertisment/>
                <Produce name="Dịch vụ" produce={this.props.json} />
                <Produce name="Điện tử" produce={this.props.json} />
                <Footer/>
            </PageWrapper>
        )
    }
}

export default Home;