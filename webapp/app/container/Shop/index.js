import React from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from './action';
import { fetchCategoryShop } from './TabletShop/action';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Tablet from './TabletShop';
import Produce from '../../components/Home/Produce';
import InfoShop from '../../components/Shop';

class Shop extends React.Component {
    state = {
        success: false,
    }

    componentDidMount() {
        this.props.fetchCollection(this.props.match.params.pageid);
    }
   
    componentWillReceiveProps(nextProps) {
        this.setState({success: true})
        this.props.fetchCategoryShop(this.props.match.params.pageid);
    }
    render() {
        return (
            <div>
                {
                    this.state.success &&
                    <div>
                        <InfoShop pageid={this.props.match.params.pageid}/>
                        <BreadCrumb />
                        <main id="shop">
                            <div className="container">
                                <div className="row">
                                    <SideBar />
                                    <Tablet />
                                </div>
                            </div>
                        </main>
                        
                    </div>
                }
                {/* <div className="fb-customerchat" page_id={this.props.match.params.pageid}></div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       shop: state.shopReducer.shop,
    }
}

const mapDispatchToProps = ({
    fetchCollection,
    fetchCategoryShop,
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);