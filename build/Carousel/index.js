import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './styles.scss';
import { Carousel as CarouselAntd } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

var PrevArrow = function PrevArrow(props) {
  var className = props.className,
      addClassName = props.addClassName,
      style = props.style,
      onClick = props.onClick,
      icon = props.icon;
  return /*#__PURE__*/React.createElement("div", {
    className: [className, addClassName].join(' '),
    onClick: onClick
  }, icon);
};

var NextArrow = function NextArrow(props) {
  var className = props.className,
      addClassName = props.addClassName,
      style = props.style,
      onClick = props.onClick,
      icon = props.icon;
  return /*#__PURE__*/React.createElement("div", {
    className: [className, addClassName].join(' '),
    onClick: onClick
  }, icon);
};

var Carousel = forwardRef(function (_ref, ref) {
  var type = _ref.type,
      dots = _ref.dots,
      classNameArrow = _ref.classNameArrow,
      prevIcon = _ref.prevIcon,
      nextIcon = _ref.nextIcon,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "dots", "classNameArrow", "prevIcon", "nextIcon", "children"]);

  var carouselAntdRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      goTo: function goTo(idx) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (carouselAntdRef && carouselAntdRef.current) {
          carouselAntdRef.current.goTo(idx, dontAnimate);
        }
      }
    };
  });

  var props = _objectSpread(_objectSpread({}, rest), {}, {
    dots: dots,
    arrows: true,
    nextArrow: /*#__PURE__*/React.createElement(NextArrow, {
      icon: nextIcon,
      addClassName: classNameArrow
    }),
    prevArrow: /*#__PURE__*/React.createElement(PrevArrow, {
      icon: prevIcon,
      addClassName: classNameArrow
    })
  });

  return /*#__PURE__*/React.createElement("div", {
    className: "carousel-custom-wrapper"
  }, /*#__PURE__*/React.createElement(CarouselAntd, Object.assign({
    ref: carouselAntdRef,
    className: "carousel-custom ".concat(type)
  }, props), children));
});
Carousel.defaultProps = {
  type: 'primary',
  dots: false,
  classNameArrow: 'banner',
  prevIcon: /*#__PURE__*/React.createElement(LeftOutlined, null),
  nextIcon: /*#__PURE__*/React.createElement(RightOutlined, null)
};
export default Carousel;