import React,{ Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';
import Main from '../Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Category from '../Category';
import ProductDetail from '../ProductDetail';


class App extends Component {

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
        suggest: state.homeReducer.suggest,
        electric: state.homeReducer.electric,
        electricAds: state.homeReducer.electricAds,
    }
}

export default withRouter(connect(mapStateToProps)(App));