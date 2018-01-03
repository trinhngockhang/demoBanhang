import React from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from './action';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Tablet from './TabletShop';
import Produce from '../../components/Home/Produce';
import InfoShop from '../../components/Shop/InfoShop';

class Shop extends React.Component {
    state = {
        success: false,
    }

    componentDidMount() {
        this.props.fetchCollection(this.props.match.params.pageid);
    }
   
    componentWillReceiveProps(nextProps) {
        if(!nextProps.isLoading) {
            this.setState({success: true})
        }
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
                        <Produce name="Hàng gia dụng" produce={this.props.produce} />
                        <Produce name="Hàng điện tử" produce={this.props.produce} />
                    </div>
                }
                <div className="fb-customerchat" page_id={this.props.match.params.pageid}></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        produce: state.homeReducer.produce,
        isLoading: state.shopReducer.isLoading,
    }
}

const mapDispatchToProps = ({
    fetchCollection,
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);