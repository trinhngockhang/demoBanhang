import React from 'react';

export default class MenuAds extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.items !== this.props.items) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.items.map((item, index) => {
                        return (
                            <div className="col-md-6" key={index}>
                                <div className="banner-box">
                                    <div className="inner-box">
                                        <a href="#" title="">
                                            <img src={item.image_url} alt="" />
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