import React from 'react';
import TabletItem from './TabletItem';

export default class Tablet extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.title !== this.props.title || nextProps.category !== this.props.category) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="col-lg-10 col-md-9">
                <div className="main-shop">
                    <div className="wrap-imagebox">
                        <div className="flat-row-title">
                            <h3>{ this.props.title }</h3>
                            <span>
                                Showing 1–15 of 20 results
                                </span>
                            <div className="clearfix"></div>
                        </div>
                        <div className="sort-product">
                            <ul className="icons">
                                <li>
                                    <img src="./images/icons/list-1.png" alt="" />
                                </li>
                                <li>
                                    <img src="./images/icons/list-2.png" alt="" />
                                </li>
                            </ul>
                            <div className="sort">
                                <div className="popularity">
                                    <select name="popularity">
                                        <option value="">Sort by popularity</option>
                                        <option value="">Sort by popularity</option>
                                        <option value="">Sort by popularity</option>
                                        <option value="">Sort by popularity</option>
                                    </select>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="tab-product">
                            <TabletItem category={ this.props.category } />
                        </div>
                    </div>
                    <div className="blog-pagination">
                        <span>
                            Showing 1–15 of 20 results
                            </span>
                        <ul className="flat-pagination style1">
                            <li className="prev">
                                <a href="#" title="">
                                    <img src="./images/icons/left-1.png" alt="" />Prev Page
                                    </a>
                            </li>
                            <li>
                                <a href="#" className="waves-effect" title="">01</a>
                            </li>
                            <li>
                                <a href="#" className="waves-effect" title="">02</a>
                            </li>
                            <li className="active">
                                <a href="#" className="waves-effect" title="">03</a>
                            </li>
                            <li>
                                <a href="#" className="waves-effect" title="">04</a>
                            </li>
                            <li className="next">
                                <a href="#" title="">
                                    Next Page<img src="./images/icons/right-1.png" alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}