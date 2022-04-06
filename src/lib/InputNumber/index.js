import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { InputNumber as InputNumberAntd } from 'antd';

const InputNumber = ({ className, type, ...rest }) => {
  return (
    <InputNumberAntd
      className={`input-number-custom ${className}`}
      type={type}
      {...rest}
    />
  );
};

InputNumber.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

InputNumber.defaultProps = {
  className: 'primary',
  type: 'number',
};

export default InputNumber;
