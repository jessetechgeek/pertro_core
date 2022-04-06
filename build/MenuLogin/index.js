import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Image from '../Image';

var MenuLogin = function MenuLogin(_ref) {
  var src = _ref.src,
      onClickLogin = _ref.onClickLogin,
      onClickSignUp = _ref.onClickSignUp,
      text = _ref.text,
      languageData = _ref.languageData;
  return /*#__PURE__*/React.createElement("div", {
    className: "menu-login-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu-login-alert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert-img"
  }, /*#__PURE__*/React.createElement(Image, {
    src: src
  })), /*#__PURE__*/React.createElement("div", {
    className: "alert-content"
  }, text)), /*#__PURE__*/React.createElement("div", {
    className: "menu-login-footer"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn",
    onClick: onClickLogin
  }, languageData.LOG_IN)), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn",
    onClick: onClickSignUp
  }, languageData.SIGN_UP)))));
};

export default MenuLogin;