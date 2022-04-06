import React from 'react';
import './styles.scss';
import Image from '../Image';
import QRCode from 'react-qr-code';
import { Space } from 'antd';

var DownloadMobile = function DownloadMobile(_ref) {
  var className = _ref.className,
      appStoreSrc = _ref.appStoreSrc,
      googlePlaySrc = _ref.googlePlaySrc;
  return /*#__PURE__*/React.createElement("div", {
    className: ['download-mobile-wrapper', className].join(' ')
  }, /*#__PURE__*/React.createElement(Space, {
    size: 11,
    align: "start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qr-wrapper"
  }, /*#__PURE__*/React.createElement(QRCode, {
    size: 80,
    value: "Hello, World!"
  })), /*#__PURE__*/React.createElement("div", {
    className: "store"
  }, /*#__PURE__*/React.createElement("div", {
    className: "appstore"
  }, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Image, {
    src: appStoreSrc
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Image, {
    src: googlePlaySrc
  }))))));
};

DownloadMobile.defaultProps = {
  className: '',
  appStoreSrc: '/images/appstore.png',
  googlePlaySrc: '/images/googleplay.png'
};
export default DownloadMobile;