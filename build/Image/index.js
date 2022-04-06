import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import './styles.scss';

var Img = function Img(_ref) {
  var id = _ref.id,
      src = _ref.src,
      alt = _ref.alt,
      loaded = _ref.loaded,
      setLoaded = _ref.setLoaded;
  var imgRef = useRef(null);
  useEffect(function () {
    handleWhenImageComplete();
  }, []);
  useEffect(function () {
    if (src) {
      if (imgRef && imgRef.current) {
        if (imgRef.current.complete) {
          handleWhenImageComplete();
        } else {
          imgRef.current.onload = function () {
            setLoaded(true);
          };
        }
      }
    }
  }, [src]);

  var handleWhenImageComplete = function handleWhenImageComplete() {
    if (imgRef && imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  };

  return /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    className: classnames({
      loaded: loaded
    }),
    id: id,
    src: src,
    alt: alt
  });
};

var Image = function Image(_ref2) {
  var id = _ref2.id,
      className = _ref2.className,
      src = _ref2.src,
      alt = _ref2.alt;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var ref = useRef(null);
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
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: classnames('image-wrapper', className, {
      loaded: loaded
    }),
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement(Img, {
    id: id,
    src: src,
    alt: alt,
    loaded: loaded,
    setLoaded: setLoaded
  })));
};

Image.defaultProps = {
  src: '',
  alt: 'banana_image'
};
export default Image;