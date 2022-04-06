import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useImperativeHandle, forwardRef, useState, useCallback, useEffect } from 'react';
import './styles.scss';
import { Input } from 'antd';
var SearchAntd = Input.Search;
var Search = forwardRef(function (_ref, ref) {
  var type = _ref.type,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ["type", "placeholder"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      updateState = _useState4[1];

  var forceUpdate = useCallback(function () {
    setVisible(false);
    updateState({});
  }, []);
  useImperativeHandle(ref, function () {
    return {
      forceUpdate: forceUpdate
    };
  });
  useEffect(function () {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return /*#__PURE__*/React.createElement(SearchAntd, Object.assign({
    className: "search-custom ".concat(type),
    placeholder: placeholder
  }, rest, {
    enterButton: true
  }));
});
Search.defaultProps = {
  type: 'primary',
  placeholder: ''
};
export default Search;