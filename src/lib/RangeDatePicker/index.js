import { Col, DatePicker, Row } from 'antd';
import React, { memo } from 'react';
import './style.scss';

const { RangePicker } = DatePicker;

const RangeDatePicker = ({ ...rest }) => {
  return (
    <RangePicker { ...rest } className="range-date-picker" />
  );
};

export default memo(RangeDatePicker);