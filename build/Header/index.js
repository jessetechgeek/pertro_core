import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
var HeaderAntd = LayoutAntd.Header;

var Header = function Header(_ref) {
  var location = _ref.location,
      onChangeSearch = _ref.onChangeSearch,
      onSearch = _ref.onSearch,
      dropdownKeySearch = _ref.dropdownKeySearch,
      onClickLogo = _ref.onClickLogo,
      onClickLogin = _ref.onClickLogin,
      onClickSignup = _ref.onClickSignup,
      handleSelectChange = _ref.handleSelectChange,
      count = _ref.count,
      userInfoMenuProps = _ref.userInfoMenuProps,
      languageData = _ref.languageData,
      languageOptions = _ref.languageOptions,
      menuMyCart = _ref.menuMyCart,
      menuMyNotification = _ref.menuMyNotification,
      menuMyMessage = _ref.menuMyMessage,
      onClickCheckMyOrder = _ref.onClickCheckMyOrder;

  var _useState = useState(Cookie.getCookie(COOKIE_ENUM.BANANA_LANGUAGE) || 'en'),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1];

  var searchWrapperRef = useRef(null);
  var searchRef = useRef(null);

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visibleDropdownSearch = _useState6[0],
      setVisibleDropdownSearch = _useState6[1];

  useEffect(function () {
    if (visibleDropdownSearch) {
      setVisibleDropdownSearch(false);
    }

    if (location.pathname.indexOf('/search') > -1) {
      var queryTerm = getParamFromUrlSearch('q');
      handleChangeSearch(queryTerm);
    } else if (location.pathname.indexOf('/category') > -1) {
      handleChangeSearch('');
    }
  }, [location]);
  useEffect(function () {
    if (searchRef && searchRef.current) {
      searchRef.current.forceUpdate();
    }
  }, [languageData]);

  var onSelectChange = function onSelectChange(val) {
    Cookie.setCookie(COOKIE_ENUM.BANANA_LANGUAGE, val);
    setLanguage(val);
    handleSelectChange(val);
  };

  var handleChangeSearch = function handleChangeSearch(val) {
    setSearchTerm(val);
    onChangeSearch(val);
  };

  return /*#__PURE__*/React.createElement(HeaderAntd, {
    id: "banana-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "first-row"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 25
  }, /*#__PURE__*/React.createElement(Dropdown, {
    overlay: /*#__PURE__*/React.createElement(CheckMyOrderStatus, {
      languageData: languageData,
      onClick: onClickCheckMyOrder
    })
  }, /*#__PURE__*/React.createElement("a", {
    className: "a-item"
  }, languageData.CHECK_MY_ORDER_STATUS)), /*#__PURE__*/React.createElement(Dropdown, {
    overlay: /*#__PURE__*/React.createElement(DownloadMobile, {
      className: "download-mobile-popup"
    })
  }, /*#__PURE__*/React.createElement("a", {
    className: "a-item"
  }, languageData.DOWNLOAD_MOBILE_APP)), /*#__PURE__*/React.createElement("a", {
    className: "a-item"
  }, languageData.BECOME_A_SELLER), /*#__PURE__*/React.createElement(Space, {
    size: 16
  }, /*#__PURE__*/React.createElement("a", {
    className: "a-item"
  }, languageData.HELP_CENTER), /*#__PURE__*/React.createElement(Select, {
    className: "select-language",
    value: language,
    options: languageOptions,
    onChange: onSelectChange
  })))), /*#__PURE__*/React.createElement("div", {
    className: classnames('second-row', {
      'has-user': !!userInfoMenuProps.userInfo
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "second-row-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-logo-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-website-wrapper",
    onClick: onClickLogo
  }, /*#__PURE__*/React.createElement(LazyImage, {
    src: "/images/logo_horizontal_color.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "search-wrapper",
    ref: searchWrapperRef
  }, /*#__PURE__*/React.createElement(Dropdown, {
    visible: visibleDropdownSearch,
    overlay: dropdownKeySearch,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(visible) {
      return setVisibleDropdownSearch(visible);
    }
  }, /*#__PURE__*/React.createElement(Search, {
    ref: searchRef,
    value: searchTerm,
    onChange: function onChange(e) {
      return handleChangeSearch(e.target.value);
    },
    placeholder: languageData.SEARCH_FOR_PRODUCT_BRAND,
    onSearch: onSearch
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "second-row-right"
  }, /*#__PURE__*/React.createElement(Space, {
    size: userInfoMenuProps.userInfo ? 24 : 37
  }, /*#__PURE__*/React.createElement(Space, {
    size: 16
  }, /*#__PURE__*/React.createElement(MyNotification, {
    languageData: languageData,
    count: count.notification,
    menu: userInfoMenuProps.userInfo ? menuMyNotification : /*#__PURE__*/React.createElement(MenuLogin, {
      src: "/images/no-notification.png",
      languageData: languageData,
      text: languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_NOTIFICATION,
      onClickLogin: onClickLogin,
      onClickSignUp: onClickSignup
    })
  }), /*#__PURE__*/React.createElement(MyMessage, {
    languageData: languageData,
    count: count.message,
    menu: userInfoMenuProps.userInfo ? menuMyMessage : /*#__PURE__*/React.createElement(MenuLogin, {
      src: "/images/no-message.png",
      languageData: languageData,
      text: languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_MESSAGE,
      onClickLogin: onClickLogin,
      onClickSignUp: onClickSignup
    })
  }), /*#__PURE__*/React.createElement(MyCart, {
    languageData: languageData,
    count: count.cart,
    menu: menuMyCart
  })), !userInfoMenuProps.userInfo ? /*#__PURE__*/React.createElement(Space, {
    size: 37
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onClickLogin
  }, languageData.LOGIN), /*#__PURE__*/React.createElement(Button, {
    onClick: onClickSignup,
    size: "large"
  }, languageData.SIGN_UP)) : /*#__PURE__*/React.createElement(UserInfoMenu, Object.assign({}, userInfoMenuProps, {
    languageData: languageData
  })))))));
};

Header.defaultProps = {
  location: typeof window !== 'undefined' ? window.location : {
    pathname: ''
  },
  onChangeSearch: function onChangeSearch(val) {},
  onSearch: function onSearch(value, event) {},
  onClickLogin: function onClickLogin() {},
  onClickSignup: function onClickSignup() {},
  handleSelectChange: function handleSelectChange(val) {},
  count: {
    notification: 0,
    message: 0,
    cart: 0
  },
  userInfoMenuProps: {
    userInfo: null
  },
  languageData: {},
  onClickCheckMyOrder: function onClickCheckMyOrder() {},
  menuMyCart: /*#__PURE__*/React.createElement("div", null),
  menuMyNotification: /*#__PURE__*/React.createElement("div", null),
  menuMyMessage: /*#__PURE__*/React.createElement("div", null),
  languageOptions: [{
    id: 'en',
    name: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("div", {
      className: "language-item-image"
    }, /*#__PURE__*/React.createElement(Image, {
      src: "/images/la-eng.svg"
    })), /*#__PURE__*/React.createElement("span", null, "English"))
  }, {
    id: 'lo',
    name: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("div", {
      className: "language-item-image"
    }, /*#__PURE__*/React.createElement(Image, {
      src: "/images/la-laos.svg"
    })), /*#__PURE__*/React.createElement("span", null, "Laos"))
  }],
  dropdownKeySearch: /*#__PURE__*/React.createElement(React.Fragment, null)
};
export default Header;