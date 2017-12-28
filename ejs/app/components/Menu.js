import React from 'react';

export default (props) => {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-12">
                        <div className="nav-wrap">
                            <div id="mainnav" className="mainnav">
                                <ul className="menu">
                                    <li className="has-mega-menu first" id="focusmeplease">
                                        <a href="#" title="">
                                            <i className="fa fa-television img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Điện tử</p>
                                        </a>
                                        <div className="submenu first" id="menu-first">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-female img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Thời trang</p></a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-bath img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Đồ gia dụng</p>	</a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-futbol-o img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Thể thao</p></a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-lemon-o img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Đồ cho bé</p></a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-microchip img-submenu-mobile" aria-hidden="true"></i>
                                            <p className="menu-item">Phụ kiện</p></a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Đồ gia dụng</p></a>
                                        <div className="submenu">
                                            <div className="row">
                                                {
                                                    props.electric.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-3 col-md-12 col-6">
                                                                <a className="home-category-list__category-grid" href="">
                                                                    <div className="home-category-list__category-grid-content">
                                                                        <div className="lazy-image__container home-category-list__category-grid-thumbnail">
                                                                            <img className="lazy-image__image" src={item.src}>
                                                                            </img>
                                                                        </div>
                                                                        <div className="home-category-list__category-grid-name">{item.name}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                {
                                                    props.electricAds.map((item, index) => {
                                                        return (
                                                            <div className="col-md-6">
                                                                <div className="banner-box">
                                                                    <div className="inner-box">
                                                                        <a href="#" title="">
                                                                            <img src={item.src} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Liên hệ</p></a>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Hỗ trợ</p></a>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Kiểm tra</p></a>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Giao dịch</p></a>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                            <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Đăng nhập</p></a>
                                    </li>
                                    <li className="has-mega-menu second mobile">
                                        <a href="#" title="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-menu">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}