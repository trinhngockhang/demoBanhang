import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';
import Main from '../Main';
import Header from '../../components/SharedComponent/Header';
import Footer from '../../components/SharedComponent/Footer';
import Category from '../Category';
import ProductDetail from '../ProductDetail';

class App extends React.Component {
    render() {
        const {suggest, electric, electricAds} = this.props;
        return (
            <div>
                <Header items={suggest} electric={electric} electricAds={electricAds}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/productDetail" component={ProductDetail}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        suggest: state.appReducer.suggest,
        electric: state.appReducer.electric,
        electricAds: state.appReducer.electricAds,
    }
}

export default withRouter(connect(mapStateToProps)(App));