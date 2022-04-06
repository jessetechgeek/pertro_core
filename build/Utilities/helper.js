import React from 'react';
var dataFlattenTree = [];
export var TREE_COMPUTE = {
  getParentKey: function getParentKey(key, tree) {
    var parentKey;

    for (var i = 0; i < tree.length; i++) {
      var node = tree[i];

      if (node.children) {
        if (node.children.some(function (item) {
          return item.key === key;
        })) {
          parentKey = node.key;
        } else if (TREE_COMPUTE.getParentKey(key, node.children)) {
          parentKey = TREE_COMPUTE.getParentKey(key, node.children);
        }
      }
    }

    return parentKey;
  },
  getExpandedKeys: function getExpandedKeys(_ref) {
    var keyword = _ref.keyword,
        dataList = _ref.dataList,
        dataTree = _ref.dataTree;
    if (!keyword || !dataList || !dataList.length) return [];
    return dataList.map(function (_ref2) {
      var title = _ref2.title,
          key = _ref2.key;

      if (title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        return TREE_COMPUTE.getParentKey(key, dataTree);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    });
  },
  onHighLightSearchKey: function onHighLightSearchKey(dataTree) {
    var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!dataTree || !dataTree.length) return [];
    return dataTree.map(function (item) {
      var index = item.title.toLowerCase().indexOf(keyword.toLowerCase());
      var beforeStr = item.title.substr(0, index);
      var afterStr = item.title.substr(index + keyword.length);
      var title = index > -1 ? /*#__PURE__*/React.createElement("span", null, beforeStr, /*#__PURE__*/React.createElement("span", {
        className: "site-tree-search-value"
      }, keyword), afterStr) : /*#__PURE__*/React.createElement("span", null, item.title);

      if (item.children) {
        return {
          title: title,
          key: item.key,
          children: TREE_COMPUTE.onHighLightSearchKey(item.children, keyword)
        };
      }

      return {
        title: title,
        key: item.key
      };
    });
  },
  flattenCategoriesTree: function (_flattenCategoriesTree) {
    function flattenCategoriesTree(_x) {
      return _flattenCategoriesTree.apply(this, arguments);
    }

    flattenCategoriesTree.toString = function () {
      return _flattenCategoriesTree.toString();
    };

    return flattenCategoriesTree;
  }(function (categories) {
    if (!categories || !categories.length) return [];
    categories.forEach(function (_ref3) {
      var key = _ref3.id,
          title = _ref3.name,
          children = _ref3.children;
      dataFlattenTree.push({
        key: key,
        title: title
      });
      if (children && children.length) flattenCategoriesTree(children);
    });
    return dataFlattenTree;
  })
};