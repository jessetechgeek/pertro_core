import React from 'react';
import { Cascader as CascaderAntd } from 'antd';

import './styles.scss';

const Cascader = (props) => {
  return <CascaderAntd className="custom-cascader" {...props} />;
};

export default Cascader;
