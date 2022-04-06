import React, { useState, useEffect, useRef } from 'react';
import { Layout as LayoutAntd, Space, Row, Col } from 'antd';
import { Select, Search, Button, LazyImage } from '../index';

import './styles.scss';
import { getParamFromUrlSearch } from '../Utilities';
import Cookie from '../Cookie';
import COOKIE_ENUM from '../COOKIE_ENUM';
import Image from '../Image';
import UserInfoMenu from './components/UserInfoMenu';
import classnames from 'classnames';
import DownloadMobile from '../DownloadMobile';
import MyCart from './components/MyCart';
import Dropdown from '../Dropdown';
import MyNotification from './components/MyNotification';
import MyMessage from './components/MyMessage';
import MenuLogin from '../MenuLogin';
import CheckMyOrderStatus from './components/CheckMyOrderStatus';

const { Header: HeaderAntd } = LayoutAntd;

const Header = ({
  location,
  onChangeSearch,
  onSearch,
  dropdownKeySearch,
  onClickLogo,
  onClickLogin,
  onClickSignup,
  handleSelectChange,
  count,
  userInfoMenuProps,
  languageData,
  languageOptions,
  menuMyCart,
  menuMyNotification,
  menuMyMessage,
  onClickCheckMyOrder,
}) => {
  const [language, setLanguage] = useState(
    Cookie.getCookie(COOKIE_ENUM.BANANA_LANGUAGE) || 'en'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const searchWrapperRef = useRef(null);
  const searchRef = useRef(null);
  const [visibleDropdownSearch, setVisibleDropdownSearch] = useState(false);

  useEffect(() => {
    if (visibleDropdownSearch) {
      setVisibleDropdownSearch(false);
    }
    if (location.pathname.indexOf('/search') > -1) {
      const queryTerm = getParamFromUrlSearch('q');
      handleChangeSearch(queryTerm);
    } else if (location.pathname.indexOf('/category') > -1) {
      handleChangeSearch('');
    }
  }, [location]);

  useEffect(() => {
    if (searchRef && searchRef.current) {
      searchRef.current.forceUpdate();
    }
  }, [languageData]);

  const onSelectChange = (val) => {
    Cookie.setCookie(COOKIE_ENUM.BANANA_LANGUAGE, val);
    setLanguage(val);
    handleSelectChange(val);
  };

  const handleChangeSearch = (val) => {
    setSearchTerm(val);
    onChangeSearch(val);
  };

  return (
    <HeaderAntd id="banana-header">
      <div className="header-wrapper">
        <div className="first-row">
          <Space size={25}>
            <Dropdown
              overlay={
                <CheckMyOrderStatus
                  languageData={languageData}
                  onClick={onClickCheckMyOrder}
                />
              }
            >
              <a className="a-item">{languageData.CHECK_MY_ORDER_STATUS}</a>
            </Dropdown>
            <Dropdown
              overlay={<DownloadMobile className="download-mobile-popup" />}
            >
              <a className="a-item">{languageData.DOWNLOAD_MOBILE_APP}</a>
            </Dropdown>

            <a className="a-item">{languageData.BECOME_A_SELLER}</a>
            <Space size={16}>
              <a className="a-item">{languageData.HELP_CENTER}</a>
              <Select
                className="select-language"
                value={language}
                options={languageOptions}
                onChange={onSelectChange}
              />
            </Space>
          </Space>
        </div>
        <div
          className={classnames('second-row', {
            'has-user': !!userInfoMenuProps.userInfo,
          })}
        >
          <div className="second-row-left">
            <div className="search-logo-wrapper">
              <div className="logo-website-wrapper" onClick={onClickLogo}>
                <LazyImage src="/images/logo_horizontal_color.png" />
              </div>
              <div className="search-wrapper" ref={searchWrapperRef}>
                <Dropdown
                  visible={visibleDropdownSearch}
                  overlay={dropdownKeySearch}
                  trigger={['click']}
                  onVisibleChange={(visible) =>
                    setVisibleDropdownSearch(visible)
                  }
                >
                  <Search
                    ref={searchRef}
                    value={searchTerm}
                    onChange={(e) => handleChangeSearch(e.target.value)}
                    placeholder={languageData.SEARCH_FOR_PRODUCT_BRAND}
                    onSearch={onSearch}
                  />
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="second-row-right">
            <Space size={userInfoMenuProps.userInfo ? 24 : 37}>
              <Space size={16}>
                <MyNotification
                  languageData={languageData}
                  count={count.notification}
                  menu={
                    userInfoMenuProps.userInfo ? (
                      menuMyNotification
                    ) : (
                      <MenuLogin
                        src="/images/no-notification.png"
                        languageData={languageData}
                        text={
                          languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_NOTIFICATION
                        }
                        onClickLogin={onClickLogin}
                        onClickSignUp={onClickSignup}
                      />
                    )
                  }
                />
                <MyMessage
                  languageData={languageData}
                  count={count.message}
                  menu={
                    userInfoMenuProps.userInfo ? (
                      menuMyMessage
                    ) : (
                      <MenuLogin
                        src="/images/no-message.png"
                        languageData={languageData}
                        text={languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_MESSAGE}
                        onClickLogin={onClickLogin}
                        onClickSignUp={onClickSignup}
                      />
                    )
                  }
                />
                <MyCart
                  languageData={languageData}
                  count={count.cart}
                  menu={menuMyCart}
                />
              </Space>
              {!userInfoMenuProps.userInfo ? (
                <Space size={37}>
                  <a onClick={onClickLogin}>{languageData.LOGIN}</a>
                  <Button onClick={onClickSignup} size="large">
                    {languageData.SIGN_UP}
                  </Button>
                </Space>
              ) : (
                <UserInfoMenu
                  {...userInfoMenuProps}
                  languageData={languageData}
                />
              )}
            </Space>
          </div>
        </div>
      </div>
    </HeaderAntd>
  );
};

Header.defaultProps = {
  location: typeof window !== 'undefined' ? window.location : { pathname: '' },
  onChangeSearch: (val) => {},
  onSearch: (value, event) => {},
  onClickLogin: () => {},
  onClickSignup: () => {},
  handleSelectChange: (val) => {},
  count: {
    notification: 0,
    message: 0,
    cart: 0,
  },
  userInfoMenuProps: {
    userInfo: null,
  },
  languageData: {},
  onClickCheckMyOrder: () => {},
  menuMyCart: <div></div>,
  menuMyNotification: <div></div>,
  menuMyMessage: <div></div>,
  languageOptions: [
    {
      id: 'en',
      name: (
        <Space>
          <div className="language-item-image">
            <Image src="/images/la-eng.svg" />
          </div>
          <span>English</span>
        </Space>
      ),
    },
    {
      id: 'lo',
      name: (
        <Space>
          <div className="language-item-image">
            <Image src="/images/la-laos.svg" />
          </div>
          <span>Laos</span>
        </Space>
      ),
    },
  ],
  dropdownKeySearch: <></>,
};

export default Header;
