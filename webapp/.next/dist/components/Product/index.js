'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = (0, _jsx3.default)('div', {
    className: 'queue'
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}));

var _ref3 = (0, _jsx3.default)('div', {
    className: 'status-product'
}, void 0, 'Availablity ', (0, _jsx3.default)('span', {}, void 0, 'In stock'));

var _ref4 = (0, _jsx3.default)('div', {
    className: 'info-text'
}, void 0, 'Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.');

var _ref5 = (0, _jsx3.default)('div', {
    className: 'quanlity-box'
}, void 0, (0, _jsx3.default)('div', {
    className: 'colors'
}, void 0, (0, _jsx3.default)('select', {
    name: 'color'
}, void 0, (0, _jsx3.default)('option', {
    value: ''
}, void 0, 'Select Color'), (0, _jsx3.default)('option', {
    value: ''
}, void 0, 'Black'), (0, _jsx3.default)('option', {
    value: ''
}, void 0, 'Red'), (0, _jsx3.default)('option', {
    value: ''
}, void 0, 'White'))), (0, _jsx3.default)('div', {
    className: 'quanlity'
}, void 0, (0, _jsx3.default)('span', {
    className: 'btn-down'
}), (0, _jsx3.default)('input', {
    type: 'number',
    name: 'number',
    value: '',
    min: '1',
    max: '100',
    placeholder: 'Quanlity'
}), (0, _jsx3.default)('span', {
    className: 'btn-up'
})));

var _ref6 = (0, _jsx3.default)('img', {
    src: './images/icons/add-cart.png',
    alt: ''
});

var _ref7 = (0, _jsx3.default)('div', {
    className: 'social-single'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'SHARE'), (0, _jsx3.default)('ul', {
    className: 'social-list style2'
}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-facebook',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-twitter',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-instagram',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-pinterest',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-dribbble',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-google',
    'aria-hidden': 'true'
})))));

var _ref8 = (0, _jsx3.default)('section', {
    className: 'flat-product-content'
}, void 0, (0, _jsx3.default)('ul', {
    className: 'product-detail-bar'
}, void 0, (0, _jsx3.default)('li', {
    className: 'active'
}, void 0, 'Description'), (0, _jsx3.default)('li', {}, void 0, 'Tecnical Specs'), (0, _jsx3.default)('li', {}, void 0, 'Reviews')), (0, _jsx3.default)('div', {
    className: 'container'
}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
}, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'description-text'
}, void 0, (0, _jsx3.default)('div', {
    className: 'box-text'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Nuqqam Et Massa'), (0, _jsx3.default)('p', {}, void 0, 'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.')), (0, _jsx3.default)('div', {
    className: 'box-text wireless'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Wireless'), (0, _jsx3.default)('p', {}, void 0, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece ', (0, _jsx3.default)('br', {}), 'of classical Latin literature from 45 BC, making it over 2000 years old.')), (0, _jsx3.default)('div', {
    className: 'box-text design'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Fresh Design'), (0, _jsx3.default)('p', {}, void 0, 'It is a long established fact that a reader will be distracted by the readable content of ', (0, _jsx3.default)('br', {}), 'a page when looking at its layout. The point of using Lorem Ipsum is that it has a ', (0, _jsx3.default)('br', {}), 'more-or-less normal distribution of letters, as opposed to using')), (0, _jsx3.default)('div', {
    className: 'box-text sound'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Fabolous Sound'), (0, _jsx3.default)('p', {}, void 0, 'There are many variations of passages of Lorem Ipsum available, but the ', (0, _jsx3.default)('br', {}), 'majority have suffered alteration in some form, by injected humour, or ', (0, _jsx3.default)('br', {}), 'randomised words which don\'t look even slightly believable.')))), (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'description-image'
}, void 0, (0, _jsx3.default)('div', {
    className: 'box-image'
}, void 0, (0, _jsx3.default)('img', {
    src: './images/product/single/01.png',
    alt: ''
})), (0, _jsx3.default)('div', {
    className: 'box-text'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Nuqqam Et Massa'), (0, _jsx3.default)('p', {}, void 0, 'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.')))), (0, _jsx3.default)('div', {
    className: 'col-md-12'
}, void 0, (0, _jsx3.default)('div', {
    className: 'different-color'
}, void 0, (0, _jsx3.default)('div', {
    className: 'title'
}, void 0, 'Different Colors'), (0, _jsx3.default)('p', {}, void 0, 'Sed sodales sed orci', (0, _jsx3.default)('br', {}), 'molestie'))), (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'box-left'
}, void 0, (0, _jsx3.default)('div', {
    className: 'img-line'
}, void 0, (0, _jsx3.default)('img', {
    src: './images/product/single/line-1.png',
    alt: ''
})), (0, _jsx3.default)('div', {
    className: 'img-product'
}, void 0, (0, _jsx3.default)('img', {
    src: './images/product/single/06.png',
    alt: ''
})))), (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'box-right'
}, void 0, (0, _jsx3.default)('div', {
    className: 'img-line'
}, void 0, (0, _jsx3.default)('img', {
    src: './images/product/single/line-2.png',
    alt: ''
}), (0, _jsx3.default)('img', {
    src: './images/product/single/04.png',
    alt: ''
})), (0, _jsx3.default)('div', {
    className: 'img-product'
}, void 0), (0, _jsx3.default)('div', {
    className: 'box-text'
}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Nuqqam Et Massa'), (0, _jsx3.default)('p', {}, void 0, 'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.'))))), (0, _jsx3.default)('div', {
    className: 'row'
}, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-12'
}, void 0, (0, _jsx3.default)('div', {
    className: 'tecnical-specs'
}, void 0, (0, _jsx3.default)('h4', {
    className: 'name'
}, void 0, 'Warch 42 mm Smart Watches'), (0, _jsx3.default)('table', {}, void 0, (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Height'), (0, _jsx3.default)('td', {}, void 0, '38.6mm')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Meterial'), (0, _jsx3.default)('td', {}, void 0, 'Stainless Stee')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Case'), (0, _jsx3.default)('td', {}, void 0, '40g')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Color'), (0, _jsx3.default)('td', {}, void 0, 'blue, gray, green, light blue, lime, purple, red, yellow')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Depth'), (0, _jsx3.default)('td', {}, void 0, '10.5mm')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Width'), (0, _jsx3.default)('td', {}, void 0, '33.3mm')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, 'Size'), (0, _jsx3.default)('td', {}, void 0, 'Large, Medium, Small'))))))), (0, _jsx3.default)('div', {
    className: 'row'
}, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'rating'
}, void 0, (0, _jsx3.default)('div', {
    className: 'title'
}, void 0, 'Based on 3 reviews'), (0, _jsx3.default)('div', {
    className: 'score'
}, void 0, (0, _jsx3.default)('div', {
    className: 'average-score'
}, void 0, (0, _jsx3.default)('p', {
    className: 'numb'
}, void 0, '4.3'), (0, _jsx3.default)('p', {
    className: 'text'
}, void 0, 'Average score')), (0, _jsx3.default)('div', {
    className: 'queue'
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('ul', {
    className: 'queue-box'
}, void 0, (0, _jsx3.default)('li', {
    className: 'five-star'
}, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('span', {
    className: 'numb-star'
}, void 0, '3')), (0, _jsx3.default)('li', {
    className: 'four-star'
}, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('span', {
    className: 'numb-star'
}, void 0, '4')), (0, _jsx3.default)('li', {
    className: 'three-star'
}, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('span', {
    className: 'numb-star'
}, void 0, '3')), (0, _jsx3.default)('li', {
    className: 'two-star'
}, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('span', {
    className: 'numb-star'
}, void 0, '2')), (0, _jsx3.default)('li', {
    className: 'one-star'
}, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('span', {
    className: 'numb-star'
}, void 0, '0'))))), (0, _jsx3.default)('div', {
    className: 'col-md-6'
}, void 0, (0, _jsx3.default)('div', {
    className: 'form-review'
}, void 0, (0, _jsx3.default)('div', {
    className: 'title'
}, void 0, 'Add a review'), (0, _jsx3.default)('div', {
    className: 'your-rating queue'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'Your Rating'), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
})), (0, _jsx3.default)('form', {
    action: '#',
    method: 'get',
    acceptCharset: 'utf-8'
}, void 0, (0, _jsx3.default)('div', {
    className: 'review-form-name'
}, void 0, (0, _jsx3.default)('input', {
    type: 'text',
    name: 'name-author',
    value: '',
    placeholder: 'Name'
})), (0, _jsx3.default)('div', {
    className: 'review-form-email'
}, void 0, (0, _jsx3.default)('input', {
    type: 'text',
    name: 'email-author',
    value: '',
    placeholder: 'Email'
})), (0, _jsx3.default)('div', {
    className: 'review-form-comment'
}, void 0, (0, _jsx3.default)('textarea', {
    name: 'review-text',
    placeholder: 'Your Name'
})), (0, _jsx3.default)('div', {
    className: 'btn-submit'
}, void 0, (0, _jsx3.default)('button', {
    type: 'submit'
}, void 0, 'Add Review'))))), (0, _jsx3.default)('div', {
    className: 'col-md-12'
}, void 0, (0, _jsx3.default)('ul', {
    className: 'review-list'
}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {
    className: 'review-metadata'
}, void 0, (0, _jsx3.default)('div', {
    className: 'name'
}, void 0, 'Ali Tufan : ', (0, _jsx3.default)('span', {}, void 0, 'April 3, 2016')), (0, _jsx3.default)('div', {
    className: 'queue'
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('div', {
    className: 'review-content'
}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {
    className: 'review-metadata'
}, void 0, (0, _jsx3.default)('div', {
    className: 'name'
}, void 0, 'Peter Tufan : ', (0, _jsx3.default)('span', {}, void 0, 'April 3, 2016')), (0, _jsx3.default)('div', {
    className: 'queue'
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('div', {
    className: 'review-content'
}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {
    className: 'review-metadata'
}, void 0, (0, _jsx3.default)('div', {
    className: 'name'
}, void 0, 'Jon Tufan : ', (0, _jsx3.default)('span', {}, void 0, 'April 3, 2016')), (0, _jsx3.default)('div', {
    className: 'queue'
}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}), (0, _jsx3.default)('i', {
    className: 'fa fa-star',
    'aria-hidden': 'true'
}))), (0, _jsx3.default)('div', {
    className: 'review-content'
}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'))))))));

var ProductContent = function (_React$Component) {
    (0, _inherits3.default)(ProductContent, _React$Component);

    function ProductContent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductContent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductContent.__proto__ || (0, _getPrototypeOf2.default)(ProductContent)).call.apply(_ref, [this].concat(args))), _this), _this.save = function (e, item) {
            e.preventDefault();
            _this.props.shopingBasket(item);
            _this.props.addShopingBasket(item);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductContent, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.product !== this.props.product) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('section', {
                className: 'flat-product-detail'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'container'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'row'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'col-md-6'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'flexslider'
            }, void 0, (0, _jsx3.default)('ul', {
                className: 'slides'
            }, void 0, (0, _jsx3.default)('li', {
                'data-thumb': './images/product/flexslider/thumb/2.jpg'
            }, void 0, (0, _jsx3.default)('img', {
                src: this.props.product.image_url,
                alt: this.props.product.title
            }))))), (0, _jsx3.default)('div', {
                className: 'col-md-6'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'product-detail'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'header-detail'
            }, void 0, (0, _jsx3.default)('h1', {
                className: 'name'
            }, void 0, this.props.product.title), (0, _jsx3.default)('div', {
                className: 'reviewed'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'review'
            }, void 0, _ref2), _ref3)), (0, _jsx3.default)('div', {
                className: 'content-detail'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'price'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'regular'
            }, void 0, this.props.product.quantity), (0, _jsx3.default)('div', {
                className: 'sale'
            }, void 0, this.props.product.price)), _ref4, (0, _jsx3.default)('div', {
                className: 'product-id'
            }, void 0, 'SKU: ', (0, _jsx3.default)('span', {
                className: 'id'
            }, void 0, this.props.product.id))), (0, _jsx3.default)('div', {
                className: 'footer-detail'
            }, void 0, _ref5, (0, _jsx3.default)('div', {
                className: 'box-cart style2'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'btn-add-cart'
            }, void 0, (0, _jsx3.default)('a', {
                href: '#',
                onClick: function onClick(e) {
                    return _this2.save(e, _this2.props.product);
                }
            }, void 0, _ref6, 'Mua'))), _ref7)))))), _ref8);
        }
    }]);
    return ProductContent;
}(_react2.default.Component);

var mapDispatchToProps = {
    shopingBasket: _actions.shopingBasket,
    addShopingBasket: _actions.addShopingBasket
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ProductContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByb2R1Y3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDb250ZW50Iiwic2F2ZSIsImUiLCJpdGVtIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsInNob3BpbmdCYXNrZXQiLCJhZGRTaG9waW5nQmFza2V0IiwibmV4dFByb3BzIiwicHJvZHVjdCIsImltYWdlX3VybCIsInRpdGxlIiwicXVhbnRpdHkiLCJwcmljZSIsImlkIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7O2VBd0MrRDs7ZSxBQUNFO21CQUF5Qjs7ZUFDekIsQTttQkFBeUI7O2UsQUFDekI7bUJBQXlCOztlQUN6QixBO21CQUF5Qjs7ZSxBQUN6QjttQkFBeUI7Ozs7ZUFPL0I7Ozs7ZUFjSjs7OztlQVFBOztlQUNJOztVQUNFOztXQUNLOztXQUNBOztXQUNBOztXQUNBOztlQUdQOztlQUNLOztVLEFBQ0o7VUFBYyxBO1csQUFBZTtTLEFBQU87UyxBQUFRO2lCQUFrQjs7ZUFDMUQ7Ozs7U0FLcUQsQTtTQUFrQzs7OztlQUloRzs7ZUFFRzs7VSxBQUVFO1dBQVU7O2UsQUFDRDttQkFBNkI7O1UsQUFJdEM7V0FBVTs7ZUFDRCxBO21CQUE0Qjs7VUFJckMsQTtXQUFVOztlQUNELEE7bUJBQThCOztVQUl2QyxBO1dBQVU7O2VBQ0QsQTttQkFBOEI7O1UsQUFJdkM7V0FBVTs7ZUFDRCxBO21CQUE2Qjs7VSxBQUl0QztXQUFVOztlLEFBQ0Q7bUJBQTJCOzs7O2VBWTdEOztlQUNEOztlQUNJOztlQUlIOztlQUNJOztlQUNJOztlQUNJOztlQUNJOztlQUlBOztlQUlBOztlQUlBOztlQU1SOztlQUNJOztlQUNJOztTQUNGLEE7U0FBcUM7O2VBRW5DOztlQU1SOztlQUNJOztlQUNJOztlQVFSOztlQUNJOztlQUNJOztTQUNGLEE7U0FBeUM7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