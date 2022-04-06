import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef } from 'react';
import { Dropdown as DropdownAntd } from 'antd';

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var popupRef = useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown-custom"
  }, /*#__PURE__*/React.createElement(DropdownAntd, Object.assign({
    getPopupContainer: function getPopupContainer() {
      return popupRef && popupRef.current ? popupRef.current : '';
    }
  }, rest), children), /*#__PURE__*/React.createElement("div", {
    ref: popupRef
  }));
};

export default Dropdown;