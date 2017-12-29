import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import '../stylesheets/responsive.css';
import Advertisement from '../../components/Advertisement';
import Produce from '../../components/Home/Produce';


class Home extends Component {
    render() {
        return (
            <div className="header_sticky">
                <div className="boxed">
                    <div class="preloader">
                        <div class="clear-loading loading-effect-2">
                            <span></span>
                        </div>
                    </div>
                    <Advertisement />
                    <Produce name="Hàng gia dụng" produce={this.props.produce}/>
                    <Produce name="Hàng điện tử" produce={this.props.produce}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        produce: state.homeReducer.produce,
    }
}

export default connect(mapStateToProps)(Home);