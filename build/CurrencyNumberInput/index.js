import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { InputNumber } from 'antd';

var CurrencyNumberInput = function CurrencyNumberInput(_ref) {
  var _ref$currencyType = _ref.currencyType,
      currencyType = _ref$currencyType === void 0 ? 'LAK' : _ref$currencyType,
      props = _objectWithoutProperties(_ref, ["currencyType"]);

  return /*#__PURE__*/React.createElement(InputNumber, Object.assign({
    placeholder: 0,
    formatter: function formatter(value) {
      return "".concat(currencyType, " ").concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    parser: function parser(value) {
      return value.replace(/\LAK\s?|(,*)/g, '');
    }
  }, props));
};

export default memo(CurrencyNumberInput);