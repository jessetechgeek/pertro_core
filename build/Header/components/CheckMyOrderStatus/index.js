import React from 'react';
import './styles.scss';
import Input from '../../../Input';
import Button from '../../../Button';
import { Form } from 'antd';

var CheckMyOrderStatus = function CheckMyOrderStatus(_ref) {
  var languageData = _ref.languageData,
      onClick = _ref.onClick;

  var onFinish = function onFinish(value) {
    onClick(value.orderId);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "check-my-order-status-wrapper"
  }, /*#__PURE__*/React.createElement(Form, {
    onFinish: onFinish,
    layout: "vertical",
    size: "large"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "orderId",
    label: languageData.ORDER_ID
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    htmlType: "submit"
  }, languageData.CHECK))));
};

export default CheckMyOrderStatus;