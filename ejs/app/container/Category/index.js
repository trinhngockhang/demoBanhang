import React from 'react';
import SideBar from '../../components/Category/SideBar';
import BreadCrumb from '../../components/BreadCrumb';
import Tablet from '../../components/Category/Tablet';
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
                            <Tablet/>
                        </div>
                    </div>
                </main>
                <Produce/>
            </div>
        )
    }
}

export default Category;