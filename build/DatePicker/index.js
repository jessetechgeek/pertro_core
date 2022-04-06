import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef } from 'react';
import './styles.scss';
import { DatePicker as DatePickerAntd } from 'antd';
import moment from 'moment';

var DatePicker = function DatePicker(_ref) {
  var className = _ref.className,
      format = _ref.format,
      rest = _objectWithoutProperties(_ref, ["className", "format"]);

  var datePickerPopupRef = useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "date-picker-wrapper"
  }, /*#__PURE__*/React.createElement(DatePickerAntd, Object.assign({}, rest, {
    className: ['date-picker-custom', className].join(' '),
    getPopupContainer: function getPopupContainer() {
      return datePickerPopupRef && datePickerPopupRef.current;
    },
    format: format,
    dropdownClassName: "datepicker-popup",
    selected: rest.value ? moment(rest.value) : '',
    value: rest.value ? moment(rest.value) : '',
    onChange: rest.onChange,
    placeholder: format,
    renderExtraFooter: null
  })), /*#__PURE__*/React.createElement("div", {
    ref: datePickerPopupRef,
    className: "date-picker-popup"
  }));
};

DatePicker.defaultProps = {
  className: '',
  format: 'DD/MM/YYYY'
};
export default DatePicker;