import React, { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Img = ({ id, src, alt, loaded, setLoaded }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    handleWhenImageComplete();
  }, []);

  useEffect(() => {
    if (src) {
      if (imgRef && imgRef.current) {
        if (imgRef.current.complete) {
          handleWhenImageComplete();
        } else {
          imgRef.current.onload = () => {
            setLoaded(true);
          };
        }
      }
    }
  }, [src]);

  const handleWhenImageComplete = () => {
    if (imgRef && imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  };

  return (
    <img
      ref={imgRef}
      className={classnames({ loaded: loaded })}
      id={id}
      src={src}
      alt={alt}
    />
  );
};

const Image = ({ id, className, src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  const backgroundColor = useMemo(() => {
    if (src) {
      const srcs = src.split('/');
      if (srcs && srcs.length > 0) {
        let fileName = srcs[srcs.length - 1];
        fileName = fileName.substring(0, fileName.lastIndexOf('.'));
        if (fileName) {
          const fileAttributes = fileName.split('_');
          if (fileAttributes && fileAttributes.length === 5) {
            return `#${fileAttributes[2]}`;
          }
        }
      }
    }
    return 'rgba(0, 0, 0, 0.05)';
  }, [src]);

  return (
    <div
      ref={ref}
      className={classnames('image-wrapper', className, {
        loaded: loaded,
      })}
      style={{ backgroundColor: backgroundColor }}
    >
      <picture>
        <Img
          id={id}
          src={src}
          alt={alt}
          loaded={loaded}
          setLoaded={setLoaded}
        />
      </picture>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: 'banana_image',
};

export default Image;
