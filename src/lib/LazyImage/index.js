import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';

import './styles.scss';

const Img = ({ id, src, alt, loaded, setLoaded, onLoad, onError }) => {
  const imgRef = useRef(null);

  const handleLoad = () => {
    onLoad();
    setLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      className={classnames({ loaded: loaded })}
      id={id}
      src={src}
      alt={alt}
      onLoad={handleLoad}
      onError={onError}
    />
  );
};

const LazyImage = ({ id, className, src, alt, lazyLoadProps }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const refPlaceholder = useRef(null);

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

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div
      ref={ref}
      className={classnames('image-wrapper', className, {
        loaded: loaded,
      })}
      style={{ backgroundColor: backgroundColor }}
    >
      <div ref={refPlaceholder} className="img-placeholder" />
      <LazyLoad {...lazyLoadProps}>
        <picture>
          <Img
            id={id}
            src={src}
            alt={alt}
            loaded={loaded}
            setLoaded={setLoaded}
            onLoad={removePlaceholder}
            onError={removePlaceholder}
          />
        </picture>
      </LazyLoad>
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

LazyImage.defaultProps = {
  src: '',
  alt: 'banana_image',
  lazyLoadProps: { once: true },
};

export default LazyImage;
