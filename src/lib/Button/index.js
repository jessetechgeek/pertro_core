import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Button as ButtonAntd } from 'antd';

const Button = ({ type, children, className, ...rest }) => {
  return (
    <ButtonAntd
      {...rest}
      className={`button-custom ${type} ${className}`}
      type={type}
    >
      {children}
    </ButtonAntd>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    '',
    'primary',
    'default',
    'dashed',
    'link',
    'outline',
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  className: '',
};

export default Button;
