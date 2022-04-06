import React from 'react';

let dataFlattenTree = [];
export const TREE_COMPUTE = {
  getParentKey: (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (TREE_COMPUTE.getParentKey(key, node.children)) {
          parentKey = TREE_COMPUTE.getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  },

  getExpandedKeys: ({ keyword, dataList, dataTree }) => {
    if (!keyword || !dataList || !dataList.length) return [];

    return dataList
      .map(({ title, key }) => {
        if (title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
          return TREE_COMPUTE.getParentKey(key, dataTree);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
  },

  onHighLightSearchKey: (dataTree, keyword = '') => {
    if (!dataTree || !dataTree.length) return [];

    return dataTree.map((item) => {
      const index = item.title.toLowerCase().indexOf(keyword.toLowerCase());
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + keyword.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="site-tree-search-value">{keyword}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );

      if (item.children) {
        return {
          title,
          key: item.key,
          children: TREE_COMPUTE.onHighLightSearchKey(item.children, keyword),
        };
      }

      return {
        title,
        key: item.key,
      };
    });
  },

  flattenCategoriesTree: (categories) => {
    if (!categories || !categories.length) return [];

    categories.forEach(({ id: key, name: title, children }) => {
      dataFlattenTree.push({ key, title });

      if (children && children.length) flattenCategoriesTree(children);
    });

    return dataFlattenTree;
  },
};
