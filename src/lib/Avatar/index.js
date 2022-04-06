import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Avatar as AvatarAntd } from 'antd';
import Image from '../Image';

const Avatar = ({ src, className, type, size, ...rest }) => {
  return (
    <AvatarAntd
      {...rest}
      className={`avatar-custom ${type} ${className}`}
      icon={
        <div className="img-custom">
          {src ? (
            <Image src={src} />
          ) : (
            <img src="/images/avatar.png" alt="avatar" />
          )}
        </div>
      }
      size={size}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Avatar.defaultProps = {
  src: '',
  className: '',
  type: 'primary',
  size: 'large',
};

export default Avatar;
