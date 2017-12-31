import React from 'react';

const BreadCrumb = () => {
    return (
        <div>
            <section className="flat-breadcrumb category">
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
                                </li>
                                <li class ="fill">
									<i class="fa fa-filter" aria-hidden="true"></i>
									<p id="fill-p">Bộ lọc</p>
								</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BreadCrumb;

