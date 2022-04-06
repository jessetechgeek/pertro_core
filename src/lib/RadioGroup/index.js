import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioGroup = ({ className, options, ...rest }) => {
  return (
    <Radio.Group
      className={`radio-group-custom ${className}`}
      options={options}
      {...rest}
    ></Radio.Group>
  );
};

RadioGroup.defaultProps = {
  className: 'primary',
  options: [],
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
};

export default RadioGroup;
