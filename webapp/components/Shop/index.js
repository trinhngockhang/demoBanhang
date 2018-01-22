import React from 'react';

export default (props) => {
    return (
        <div className="info-shop">
            <div className="row shop">
                <div className="col-md-12 cover-top">
                    <img className="img-cover" src={props.shop.cover.source} alt="" />
                </div>
                <div className="col-md-3">
                    <div className="cover" >
                        <img className="avatar" src={`https://graph.facebook.com/${props.shop.id}/picture?type=square&height=320&width=320`} alt="" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row info">
                        <div className="col-md-4">
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Tỉ lệ phản hồi:</p>
                                        <p className="info">93%</p>
                                    </a>
                                </div>

                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Sản phẩm:</p>
                                        <p className="info">345</p>
                                    </a>
                                </div>
                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Lượt like:</p>
                                        <p className="info">{props.fan_count}</p>
                                    </a>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4">
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Thời gian phản hồi:</p>
                                        <p className="info">Trong vài giờ</p>
                                    </a>
                                </div>
                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Tham gia:</p>
                                        <p className="info">3 tháng trước</p>
                                    </a>
                                </div>
                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Đánh giá:</p>
                                        <p className="info">4,5/5(1000 đánh giá)</p>
                                    </a>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4">
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Thời gian chuẩn bị:</p>
                                        <p className="info">3 ngày</p>
                                    </a>
                                </div>
                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Bình luận:</p>
                                        <p className="info">189</p>
                                    </a>
                                </div>
                            </li>
                            <li className="info-detail col-4">
                                <div className="div-info">
                                    <a href="/shop">
                                        <img className="icon-info" src="./images/icons/fb.png" alt="" />
                                        <p className="info-cate">Tỉ lệ phản hồi:</p>
                                        <p className="info">93%</p>
                                    </a>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}