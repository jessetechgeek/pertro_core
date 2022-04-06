import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Input as InputAntd } from 'antd';

const Password = ({ type, ...rest }) => {
  return <InputAntd.Password className={`password-custom ${type}`} {...rest} />;
};

Password.propTypes = {
  type: PropTypes.string,
};

Password.defaultProps = {
  type: 'primary',
};

export default Password;
