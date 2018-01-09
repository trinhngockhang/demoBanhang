import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Advertisement from '../../components/Advertisement';
import Produce from '../../components/Home/Produce';

class Home extends Component {
    render() {
        return (
            <div className="header_sticky">
                <div className="boxed">
                    <Advertisement />
                    <Produce name="Dịch vụ" produce={this.props.categoryLevel2} />
                    <Produce name="Dịch vụ" produce={this.props.categoryLevel2} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryLevel2: state.appReducer.categoryLevel2,
    }
}

export default connect(mapStateToProps)(Home);