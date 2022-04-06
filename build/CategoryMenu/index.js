import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useEffect, useState } from 'react';
import './styles.scss';
import { Cascader as CascaderAntd } from 'antd';

var CategoryMenu = function CategoryMenu(_ref) {
  var handleClick = _ref.handleClick,
      options = _ref.options,
      blurWhenMouseLeave = _ref.blurWhenMouseLeave,
      rest = _objectWithoutProperties(_ref, ["handleClick", "options", "blurWhenMouseLeave"]);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var cascaderRef = useRef(null);
  useEffect(function () {
    if (blurWhenMouseLeave) {
      var blur = function blur() {
        if (value.length > 0) {
          setValue([]);
        } else {
          setValue(['blur']);
        }
      };

      setTimeout(function () {
        var els = document.getElementsByClassName('category-menu-popup-custom hide-search');

        if (els && els[0]) {
          els[0].onmouseleave = blur;
        }
      }, 0);
    }

    return function () {
      if (blurWhenMouseLeave) {
        setTimeout(function () {
          var els = document.getElementsByClassName('category-menu-popup-custom hide-search');

          if (els && els[0]) {
            els[0].onmouseleave = function () {};
          }
        }, 0);
      }
    };
  }, [value, blurWhenMouseLeave]);

  var onChange = function onChange(val, selectedOptions) {
    setValue(val);
    handleClick(val, selectedOptions);
  };

  options = [].concat(_toConsumableArray(options), [{
    name: 'blur',
    id: 'blur'
  }]);
  return /*#__PURE__*/React.createElement("div", {
    className: "category-menu-custom-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    id: "category-menu-popup-container"
  }), /*#__PURE__*/React.createElement(CascaderAntd, Object.assign({
    ref: cascaderRef,
    className: "category-menu-custom hide-search",
    popupClassName: "category-menu-popup-custom hide-search",
    changeOnSelect: true,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('category-menu-popup-container');
    },
    popupVisible: true,
    showSearch: false,
    expandTrigger: 'hover',
    options: options,
    onChange: onChange,
    value: value,
    fieldNames: {
      label: 'name',
      value: 'id'
    }
  }, rest)));
};

CategoryMenu.defaultProps = {
  blurWhenMouseLeave: true,
  handleClick: function handleClick(value, selectedOptions) {
    return console.log('handleClick', value, selectedOptions);
  }
};
export default CategoryMenu;