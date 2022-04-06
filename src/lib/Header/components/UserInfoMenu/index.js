import React from 'react';
import './styles.scss';
import { CaretDownOutlined } from '@ant-design/icons';
import Avatar from '../../../Avatar';
import Dropdown from '../../../Dropdown';

const UserInfoMenu = ({ userInfo, languageData, menu, avatar }) => {
  return (
    <>
      <Dropdown
        className="user-info-menu-dropdown"
        overlay={menu}
        getPopupContainer={() =>
          document.getElementById('user-info-menu-popup')
        }
      >
        <div className="user-info-menu-wrapper">
          <div className="user-info-menu">
            <Avatar src={avatar} />
            <div className="user-info">
              <div className="welcome">{languageData.WELCOME}</div>
              <div className="user-name">{userInfo.fullName}</div>
            </div>
            <CaretDownOutlined style={{ color: '#A2A5B9' }} />
          </div>
        </div>
      </Dropdown>
      <div id="user-info-menu-popup"></div>
    </>
  );
};

export default UserInfoMenu;
