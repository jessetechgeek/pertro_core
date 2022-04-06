import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Breadcrumb as BreadcrumbAntd } from 'antd';

const Breadcrumb = ({
  type,
  className,
  breadcrumbs,
  breadcrumbItemProps,
  ...rest
}) => {
  return (
    <BreadcrumbAntd
      className={`breadcrumb-custom ${className} ${type}`}
      type={type}
      {...rest}
    >
      {breadcrumbs.map(({ name, ...itemRest }, idx) => (
        <BreadcrumbAntd.Item key={idx} {...itemRest} {...breadcrumbItemProps}>
          {name}
        </BreadcrumbAntd.Item>
      ))}
    </BreadcrumbAntd>
  );
};

Breadcrumb.propTypes = {
  type: PropTypes.oneOf(['', 'primary']),
  breadcrumbs: PropTypes.array.isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  type: 'primary',
  className: '',
  breadcrumbs: [],
};

export default Breadcrumb;
