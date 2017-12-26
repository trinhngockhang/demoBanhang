import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../Category';
import ProductDetail from '../ProductDetail';
import BreadCrumb from '../../components/BreadCrumb';

class Main extends Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <Switch>
                    <Route path="/category" component={Category}/>
                    <Route path="/productDetail" component={ProductDetail}/>
                </Switch>
            </div>
        )
    }
}

export default Main;