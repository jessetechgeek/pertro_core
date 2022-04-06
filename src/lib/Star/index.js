
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Rate } from 'antd';

const Star = ({ type, ...rest }) => {
  return (
    <Rate className={`star-custom ${type}`} {...rest} />
  )
};

Star.propTypes = {
  type: PropTypes.oneOf(['', 'primary']),
};

Star.defaultProps = {
  type: 'primary',
};

export default Star;