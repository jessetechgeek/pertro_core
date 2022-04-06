import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Pagination as PaginationAntd } from 'antd';

const Pagination = ({ type, showSizeChanger, ...rest }) => {
  return (
    <PaginationAntd className={`pagination-custom ${type}`} {...rest} showSizeChanger={showSizeChanger} />
  )
};

Pagination.propTypes = {
  type: PropTypes.oneOf(['', 'primary']),
  showSizeChanger: PropTypes.bool,
};

Pagination.defaultProps = {
  type: 'primary',
  showSizeChanger: false,
};

export default Pagination;