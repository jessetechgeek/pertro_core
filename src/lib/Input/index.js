import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Input as InputAntd } from 'antd';

const Input = ({ type, ...rest }) => {
  return <InputAntd className={`input-custom ${type}`} {...rest} />;
};

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'primary',
};

export default Input;
