import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import './styles.scss';
import { Rate } from 'antd';

var Star = function Star(_ref) {
  var type = _ref.type,
      rest = _objectWithoutProperties(_ref, ["type"]);

  return /*#__PURE__*/React.createElement(Rate, Object.assign({
    className: "star-custom ".concat(type)
  }, rest));
};

Star.defaultProps = {
  type: 'primary'
};
export default Star;