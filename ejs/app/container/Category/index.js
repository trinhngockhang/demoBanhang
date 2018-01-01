import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/Category/BreadCrumdCategory';
import Produce from '../../components/Home/Produce';

class Category extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar/>
                            
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


export default connect(mapStateToProps)(Category);