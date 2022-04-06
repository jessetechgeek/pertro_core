import React from 'react';
import { Space, Badge } from 'antd';
import Image from '../../../Image';
import './styles.scss';
import Dropdown from '../../../Dropdown';

const MyNotification = ({ languageData, count, menu }) => {
  return (
    <Dropdown
      className="user-info-my-cart-dropdown"
      overlay={menu}
      placement="bottomRight"
    >
      <div className="my-notification-wrapper">
        <Space size={6}>
          <Badge count={count} offset={[-3, 0]}>
            <Image src="/images/notification.svg" />
          </Badge>
          <span>{languageData.NOTIFICATION}</span>
        </Space>
      </div>
    </Dropdown>
  );
};

export default MyNotification;
