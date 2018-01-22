import React from 'react';
import MenuProduce from './MenuProduce';
import MenuAds from './MenuAds';

export default class Menu extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.items !== this.props.items) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center col-12">
                            <div className="nav-wrap">
                                <div id="mainnav" className="mainnav">
                                    <ul className="menu">
                                        <li className="has-mega-menu first" id="focusmeplease">
                                            <a href="#" title="">
                                                <i className="fa fa-television img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Điện tử</p>
                                            </a>
                                            <div className="submenu first" id="menu-first">
                                                <MenuProduce items={this.props.items} /> 
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-female img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Thời trang</p></a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-bath img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Đồ gia dụng</p>	</a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-futbol-o img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Thể thao</p></a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-lemon-o img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Đồ cho bé</p></a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-microchip img-submenu-mobile" aria-hidden="true"></i>
                                                <p className="menu-item">Phụ kiện</p></a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                <MenuAds/>
                                            </div>
                                        </li>
                                        <li className="has-mega-menu second">
                                            <a href="#" title="">
                                                <i className="fa fa-print img-submenu-mobile" aria-hidden="true"></i><p className="menu-item">Đồ gia dụng</p></a>
                                            <div className="submenu">
                                                <MenuProduce items={this.props.items} />
                                                 <MenuAds/>
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
}
