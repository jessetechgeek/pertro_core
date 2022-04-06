import React, { memo } from 'react';
import { InputNumber } from 'antd';

const CurrencyNumberInput = ({ currencyType = 'LAK', ...props }) => {
  return (
    <InputNumber placeholder={0}
      formatter={value => `${currencyType} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\LAK\s?|(,*)/g, '')}
      {...props} />
  )
}

export default memo(CurrencyNumberInput);