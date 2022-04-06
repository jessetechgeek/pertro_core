import React from 'react';
import PropTypes from 'prop-types';
import { Select as SelectAntd } from 'antd';

import './styles.scss';

const { Option } = SelectAntd;

const Select = ({
  options,
  onChange,
  className,
  optionLabel,
  filterOption,
  optionFilterProp,
  ...selectProps
}) => {
  const handleChange = (value, option) => {
    onChange(value, option);
  };

  return (
    <SelectAntd
      {...selectProps}
      onChange={handleChange}
      className={`custom-select ${className}`}
      optionFilterProp={optionFilterProp}
      filterOption={filterOption}
    >
      {options.map((opt) => (
        <Option
          {...opt}
          key={opt[optionLabel.value]}
          value={opt[optionLabel.value]}
        >
          {opt[optionLabel.label]}
        </Option>
      ))}
    </SelectAntd>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  optionLabel: PropTypes.object,
  options: PropTypes.array,
  optionFilterProp: PropTypes.string,
  filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

Select.defaultProps = {
  className: '',
  options: [],
  onChange: (f) => f,
  optionLabel: { label: 'name', value: 'id' },
  optionFilterProp: 'children',
  filterOption: (input, option) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  },
};

export default Select;
