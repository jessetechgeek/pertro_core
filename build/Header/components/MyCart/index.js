import React from 'react';
import { Space, Badge } from 'antd';
import Image from '../../../Image';
import './styles.scss';
import Dropdown from '../../../Dropdown';

var MyCart = function MyCart(_ref) {
  var languageData = _ref.languageData,
      count = _ref.count,
      menu = _ref.menu;
  return /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-info-my-cart-dropdown",
    overlay: menu,
    placement: "bottomRight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-cart-wrapper"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 6
  }, /*#__PURE__*/React.createElement(Badge, {
    count: count,
    offset: [-3, 0]
  }, /*#__PURE__*/React.createElement(Image, {
    src: "/images/cart.svg"
  })), /*#__PURE__*/React.createElement("span", null, languageData.MY_CART))));
};

export default MyCart;