import React from 'react';
import Link from 'next/link';

const BreadCrumb = () => {
    return (
        <div>
            <section className="flat-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs">
                                <li className="trail-item">
                                    <Link href="/" title="Mesi.vn - Mua sắm online">Trang chủ</Link>
                                    <span><img src="/static/images/icons/arrow-right.png" alt="Mesi.vn - Mua sắn online" /></span>
                                </li>
                                <li className="trail-item">
                                    <a href="#" title="">Danh mục</a>
                                </li>
                                <li className="fill">
									<i className="fa fa-filter" aria-hidden="true"></i>
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