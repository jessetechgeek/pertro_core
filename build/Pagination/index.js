import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import './styles.scss';
import { Pagination as PaginationAntd } from 'antd';

var Pagination = function Pagination(_ref) {
  var type = _ref.type,
      showSizeChanger = _ref.showSizeChanger,
      rest = _objectWithoutProperties(_ref, ["type", "showSizeChanger"]);

  return /*#__PURE__*/React.createElement(PaginationAntd, Object.assign({
    className: "pagination-custom ".concat(type)
  }, rest, {
    showSizeChanger: showSizeChanger
  }));
};

Pagination.defaultProps = {
  type: 'primary',
  showSizeChanger: false
};
export default Pagination;