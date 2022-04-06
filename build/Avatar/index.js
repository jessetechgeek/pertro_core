import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import './styles.scss';
import { Avatar as AvatarAntd } from 'antd';
import Image from '../Image';

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      className = _ref.className,
      type = _ref.type,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["src", "className", "type", "size"]);

  return /*#__PURE__*/React.createElement(AvatarAntd, Object.assign({}, rest, {
    className: "avatar-custom ".concat(type, " ").concat(className),
    icon: /*#__PURE__*/React.createElement("div", {
      className: "img-custom"
    }, src ? /*#__PURE__*/React.createElement(Image, {
      src: src
    }) : /*#__PURE__*/React.createElement("img", {
      src: "/images/avatar.png",
      alt: "avatar"
    })),
    size: size
  }));
};

Avatar.defaultProps = {
  src: '',
  className: '',
  type: 'primary',
  size: 'large'
};
export default Avatar;