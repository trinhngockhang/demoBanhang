import React from 'react';

export default class BreadCrumb extends React.Component {
    render() {
        return (
            <div>
                <section className="flat-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="breadcrumbs">
                                    <li className="trail-item">
                                        <a href="#" title="">Trang chủ</a>
                                        <span><img src="./images/icons/arrow-right.png" alt="" /></span>
                                    </li>
                                    <li className="trail-item">
                                        <a href="#" title="">Danh mục</a>
                                        {/* <span><img src="./images/icons/arrow-right.png" alt="" /></span> */}
                                    </li>
                                    {/* <li className="trail-end">
                                        <a href="#" title="">Điện thoại di động</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

