import React from 'react';

export default class MenuAds extends React.PureComponent {
    render() {
        return (
            <div className="row">
                {
                    this.props.electricAds.map((item, index) => {
                        return (
                            <div className="col-md-6" key={index}>
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
        )
    }
}