import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Tablet from '../../components/Category/Tablet';
import Produce from '../../components/Home/Produce';
import InfoShop from '../../components/Shop/InfoShop';

class Shop extends React.Component {
    render() {
        return (
            <div>
                <InfoShop/>
                <BreadCrumb/>
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar/>
                            <Tablet/>
                        </div>
                    </div>
                </main>
                <Produce name="Hàng gia dụng" produce={this.props.produce}/>
                <Produce name="Hàng điện tử" produce={this.props.produce}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        produce: state.homeReducer.produce,
    }
}


export default connect(mapStateToProps)(Shop);