import React from 'react';
import IconCart from './IconCart';

class HeaderMobile extends React.Component {
    // shouldComponentUpdate(){
    //     return true;
    // }
    render() {
        return (
            <div>
                <section id="header-mobile">
                    <div className="row header-mobile">
                        <div className="col-md-9 col-2">
                            <div className="nav-wrap">

                            </div>
                            <div className="btn-menu">
                                <span></span>
                            </div>
                        </div>
                        <div className="col-8" >
                            <form action="">
                                <input type="text" id="input-mobile" placeholder="Bạn cần tìm gì?" />
                            </form>
                        </div>
                        <div className="col-2 inner-box">
                            <div className="inner-box mobile">
                                <a href="#" title="">
                                    <div className="icon-cart mobile">
                                        <img src="./images/icons/cart.png" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HeaderMobile;