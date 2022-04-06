import React from 'react';
import { Space, Badge } from 'antd';
import Image from '../../../Image';
import './styles.scss';
import Dropdown from '../../../Dropdown';

const MyMessage = ({ languageData, count, menu }) => {
  return (
    <Dropdown
      className="user-info-my-cart-dropdown"
      overlay={menu}
      placement="bottomRight"
    >
      <div className="my-cart-wrapper">
        <Space size={6}>
          <Badge count={count} offset={[-3, 0]}>
            <Image src="/images/cart.svg" />
          </Badge>
          <span>{languageData.MESSAGE}</span>
        </Space>
      </div>
    </Dropdown>
  );
};

export default MyMessage;
