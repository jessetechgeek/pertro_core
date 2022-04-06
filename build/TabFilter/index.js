import React from 'react';
import { Space } from 'antd';
import classnames from 'classnames';
import './style.scss';
var DEFAULT_DATA = ['All', 'Stocking', 'OutOfStock', 'Deactive', 'Rejected'];

var TabsFilter = function TabsFilter(_ref) {
  var _ref$onClickActive = _ref.onClickActive,
      onClickActive = _ref$onClickActive === void 0 ? function () {
    return null;
  } : _ref$onClickActive,
      _ref$tabData = _ref.tabData,
      tabData = _ref$tabData === void 0 ? DEFAULT_DATA : _ref$tabData,
      _ref$additionInfo = _ref.additionInfo,
      additionInfo = _ref$additionInfo === void 0 ? {} : _ref$additionInfo,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? '' : _ref$status;
  return /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border"
  }), /*#__PURE__*/React.createElement(Space, {
    size: 30
  }, tabData.map(function (prodStatus) {
    return /*#__PURE__*/React.createElement("div", {
      key: prodStatus,
      className: classnames('tag-item', {
        active: prodStatus.toLowerCase() === status.toLowerCase()
      }),
      onClick: function onClick() {
        return onClickActive(prodStatus);
      }
    }, prodStatus, ' ', "(".concat(additionInfo[prodStatus] || 0, ")"));
  })));
};

export default React.memo(TabsFilter);