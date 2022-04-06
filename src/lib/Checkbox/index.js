import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Checkbox as CheckboxAntd } from 'antd';

const Checkbox = ({ type, className, ...rest }) => {
  return (
    <CheckboxAntd
      className={`checkbox-custom ${type} ${className}`}
      {...rest}
    />
  );
};

Checkbox.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  type: 'primary',
  className: '',
};

export default Checkbox;
