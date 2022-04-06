import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Radio as RadioAntd } from 'antd';

const Radio = ({ className, children, ...rest }) => {
  return (
    <RadioAntd className={`radio-group-custom ${className}`} {...rest}>
      {children}
    </RadioAntd>
  );
};

Radio.defaultProps = {
  className: 'primary',
};

Radio.propTypes = {
  className: PropTypes.string,
};

export default Radio;
