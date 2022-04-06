import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useMemo, useRef } from 'react';
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';
import './styles.scss';

var Img = function Img(_ref) {
  var id = _ref.id,
      src = _ref.src,
      alt = _ref.alt,
      loaded = _ref.loaded,
      setLoaded = _ref.setLoaded,
      onLoad = _ref.onLoad,
      onError = _ref.onError;
  var imgRef = useRef(null);

  var handleLoad = function handleLoad() {
    onLoad();
    setLoaded(true);
  };

  return /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    className: classnames({
      loaded: loaded
    }),
    id: id,
    src: src,
    alt: alt,
    onLoad: handleLoad,
    onError: onError
  });
};

var LazyImage = function LazyImage(_ref2) {
  var id = _ref2.id,
      className = _ref2.className,
      src = _ref2.src,
      alt = _ref2.alt,
      lazyLoadProps = _ref2.lazyLoadProps;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var ref = useRef(null);
  var refPlaceholder = useRef(null);
  var backgroundColor = useMemo(function () {
    if (src) {
      var srcs = src.split('/');

      if (srcs && srcs.length > 0) {
        var fileName = srcs[srcs.length - 1];
        fileName = fileName.substring(0, fileName.lastIndexOf('.'));

        if (fileName) {
          var fileAttributes = fileName.split('_');

          if (fileAttributes && fileAttributes.length === 5) {
            return "#".concat(fileAttributes[2]);
          }
        }
      }
    }

    return 'rgba(0, 0, 0, 0.05)';
  }, [src]);

  var removePlaceholder = function removePlaceholder() {
    refPlaceholder.current.remove();
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: classnames('image-wrapper', className, {
      loaded: loaded
    }),
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: refPlaceholder,
    className: "img-placeholder"
  }), /*#__PURE__*/React.createElement(LazyLoad, lazyLoadProps, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement(Img, {
    id: id,
    src: src,
    alt: alt,
    loaded: loaded,
    setLoaded: setLoaded,
    onLoad: removePlaceholder,
    onError: removePlaceholder
  }))));
};

LazyImage.defaultProps = {
  src: '',
  alt: 'banana_image',
  lazyLoadProps: {
    once: true
  }
};
export default LazyImage;