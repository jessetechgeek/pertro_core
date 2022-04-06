import React from 'react';
import PropTypes from 'prop-types';

import FeatherIconReact from 'feather-icons-react';

const FeatherIcon = ({ ...rest }) => {
  return (
    <FeatherIconReact {...rest} />
  )
};

FeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  fill: PropTypes.string
};

export default FeatherIcon;