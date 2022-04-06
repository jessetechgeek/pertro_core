import React from 'react';
import { Spin as SpinAntd } from 'antd';
import './styles.scss';

var Spin = function Spin() {
  return /*#__PURE__*/React.createElement(SpinAntd, null);
};

export default Spin;

var loadingWrapper = function loadingWrapper(className) {
  return function () {
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement(Spin, null));
  };
};

export var LoadingScreen = loadingWrapper('loading-screen');