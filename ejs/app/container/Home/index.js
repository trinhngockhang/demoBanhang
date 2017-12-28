import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import '../stylesheets/responsive.css';
import Advertisement from '../../components/Advertisement';
import HangDienTu from '../../components/Home/HangDienTu';
import HangDaDung from '../../components/Home/HangDaDung';


class Home extends Component {
    render() {
        return (
            <div className="header_sticky">
	            <div className="boxed">
                    <Advertisement/>
                    <HangDienTu/> 
                    <HangDaDung/>   
                </div>
            </div>
        )
    }
}

export default Home;