import React from 'react';

export default class Advertisement extends React.Component {
    render() {
        return (
            <div>
                <section className="flat-row flat-banner-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="banner-box one-half">
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-01.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-05.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="banner-box bottom">
                                    <div className="inner-box bottom">
                                        <a href="#" title="">
                                            <img className="img-banner-bot" src="./images/banner_boxes/home-04.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner-box">
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-03.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 bigBanner">
                                <div className="banner-box">
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-03.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="banner-box one-half">
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-01.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src="./images/banner_boxes/home-05.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="banner-box bottom">
                                    <div className="inner-box bottom">
                                        <a href="#" title="">
                                            <img className="img-banner-bot" src="./images/banner_boxes/home-04.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="banner-mobile">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="inner-mobile left" style={{ position: 'relative' }}>
                                <a href="/" className="home__banner" data-istrackable="true">
                                    <img src="./images/banner_boxes/adayroi1.png" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                            <div className="inner-mobile left" style={{ position: 'relative' }}>
                                <a href="/" >
                                    <img src="./images/banner_boxes/adayroi2.jpg" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="inner-mobile right" style={{ position: 'relative' }}>
                                <a href="/am-thuc-ban-chay-lp32513#325131">
                                    <img src="./images/banner_boxes/adayroi3.jpg" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="row second">
                        <div className="col-xs-6">
                            <div className="inner-mobile left" style={{ position: 'relative' }}>
                                <a href="/" className="home__banner" data-istrackable="true">
                                    <img src="./images/banner_boxes/adayroi4.jpg" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                            <div className="inner-mobile left" style={{ position: 'relative' }}>
                                <a href="/" >
                                    <img src="./images/banner_boxes/adayroi5.png" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="inner-mobile right" style={{ position: 'relative' }}>
                                <a href="/" className="home__banner" >
                                    <img src="./images/banner_boxes/adayroi6.jpg" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                            <div className="inner-mobile right second" style={{position: 'relative'}}>
                                <a href="/">
                                    <img src="./images/banner_boxes/adayroi7.jpg" title="" alt="" style={{ marginBottom: '16px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}