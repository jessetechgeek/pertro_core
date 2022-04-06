import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import './styles.scss';
import { Input } from 'antd';
var TextAreaAntd = Input.TextArea;

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(TextAreaAntd, Object.assign({
    className: ['textarea-custom', className].join(' ')
  }, rest));
};

TextArea.defaultProps = {
  className: ''
};
export default TextArea;