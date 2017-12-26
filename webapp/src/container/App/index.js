import React,{ Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../Home';
import Main from '../Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Category from '../Category';
import ProductDetail from '../ProductDetail';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
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

export default withRouter(App);