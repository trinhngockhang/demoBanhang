import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from './action';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Produce from '../../components/Home/Produce';
import TableItem from '../../components/SharedComponent/TabletItem';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
        }
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.pageid);
    }

    componentWillReceiveProps(nextProps) {
       this.setState({ success: true })
    }
    render() {
        return (
            <div>
                { this.state.success &&
                <div>
                    <BreadCrumb />
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-10 col-md-9">
                                <div className="main-shop">
                                    <div className="wrap-imagebox">
                                        <div className="flat-row-title">
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
                                            <TableItem items={this.props.category} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Produce name="Hàng gia dụng" produce={this.props.categoryLevel2} />
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryLevel2: state.appReducer.categoryLevel2,
        category: state.categoryReducer.category,
    }
}

const mapDispatchToProps = ({
    fetchCategory,
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);