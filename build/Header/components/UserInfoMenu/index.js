import React from 'react';
import './styles.scss';
import { CaretDownOutlined } from '@ant-design/icons';
import Avatar from '../../../Avatar';
import Dropdown from '../../../Dropdown';

var UserInfoMenu = function UserInfoMenu(_ref) {
  var userInfo = _ref.userInfo,
      languageData = _ref.languageData,
      menu = _ref.menu,
      avatar = _ref.avatar;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-info-menu-dropdown",
    overlay: menu,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('user-info-menu-popup');
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-info-menu-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-info-menu"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome"
  }, languageData.WELCOME), /*#__PURE__*/React.createElement("div", {
    className: "user-name"
  }, userInfo.fullName)), /*#__PURE__*/React.createElement(CaretDownOutlined, {
    style: {
      color: '#A2A5B9'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    id: "user-info-menu-popup"
  }));
};

export default UserInfoMenu;