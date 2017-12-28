import React from 'react';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Tablet from '../../components/Category/Tablet';
import HangDaDung from '../../components/Home/HangDaDung';

class Category extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumb/>
                <main id="shop">
                    <div className="container">
                        <div className="row">
                            <SideBar/>
                            <Tablet/>
                        </div>
                    </div>
                </main>
                <HangDaDung/>
            </div>
        )
    }
}

export default Category;