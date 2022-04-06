import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Select as SelectAntd } from 'antd';
import './styles.scss';
var Option = SelectAntd.Option;

var Select = function Select(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      className = _ref.className,
      optionLabel = _ref.optionLabel,
      filterOption = _ref.filterOption,
      optionFilterProp = _ref.optionFilterProp,
      selectProps = _objectWithoutProperties(_ref, ["options", "onChange", "className", "optionLabel", "filterOption", "optionFilterProp"]);

  var handleChange = function handleChange(value, option) {
    onChange(value, option);
  };

  return /*#__PURE__*/React.createElement(SelectAntd, Object.assign({}, selectProps, {
    onChange: handleChange,
    className: "custom-select ".concat(className),
    optionFilterProp: optionFilterProp,
    filterOption: filterOption
  }), options.map(function (opt) {
    return /*#__PURE__*/React.createElement(Option, Object.assign({}, opt, {
      key: opt[optionLabel.value],
      value: opt[optionLabel.value]
    }), opt[optionLabel.label]);
  }));
};

Select.defaultProps = {
  className: '',
  options: [],
  onChange: function onChange(f) {
    return f;
  },
  optionLabel: {
    label: 'name',
    value: 'id'
  },
  optionFilterProp: 'children',
  filterOption: function filterOption(input, option) {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }
};
export default Select;