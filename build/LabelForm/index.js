import React from 'react';
import './styles.scss';

var LabelForm = function LabelForm(_ref) {
  var label = _ref.label,
      hideRequireMark = _ref.hideRequireMark;
  return /*#__PURE__*/React.createElement("span", {
    className: "label-custom"
  }, label, " ", !hideRequireMark && /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "*"));
};

LabelForm.defaultProps = {
  label: '',
  hideRequireMark: false
};
export default LabelForm;