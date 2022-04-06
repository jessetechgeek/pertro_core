import React from 'react';
import { Cascader as CascaderAntd } from 'antd';
import './styles.scss';

var Cascader = function Cascader(props) {
  return /*#__PURE__*/React.createElement(CascaderAntd, Object.assign({
    className: "custom-cascader"
  }, props));
};

export default Cascader;