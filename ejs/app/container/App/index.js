import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';
import '../stylesheets/responsive.css';
import Home from '../Home';
import Header from '../../components/SharedComponent/Header/Header';
import Footer from '../../components/SharedComponent/Footer';
import Category from '../Category';
import ProductDetail from '../ProductDetail';
import Shop from '../Shop';
import Cart from '../Cart';
import Checkout from '../Checkout';
import IconBox from '../../components/SharedComponent/IconBox';
import Search from '../Search';

class App extends React.Component {
    render() {
        const {suggest, electric, electricAds} = this.props;
        return (
            <div>
                <Header items={suggest} electric={electric} electricAds={electricAds}/>
                <Link to="/shop/111004729614967">Shop</Link>
                <Link to="/category/5a007c92c846cac15b53ab81">Category</Link>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/category/:pageid" component={Category}/>
                    <Route path="/product/:id" component={ProductDetail}/>
                    <Route path="/shop/:pageid" component={Shop}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/search" component={Search}/>
                </Switch>
                <IconBox/>
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