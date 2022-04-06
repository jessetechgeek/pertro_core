import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { isLocalHost } from '../Utilities';
import LocalStorage from '../LocalStorage';

var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [{
    key: "getCookie",
    value: function getCookie(cname) {
      if (isLocalHost) {
        return LocalStorage.getItem(cname);
      }

      var name = cname + '=';
      var decodedCookie = typeof document !== 'undefined' ? decodeURIComponent(document.cookie) : '';
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return '';
    }
  }, {
    key: "setCookie",
    value: function setCookie(cname, cvalue) {
      var exdays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : process.env.REACT_APP_HOST_DOMAIN;

      if (isLocalHost) {
        return LocalStorage.setItem(cname, cvalue);
      }

      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();

      if (typeof document !== 'undefined') {
        document.cookie = cname + '=' + cvalue + ';' + expires + ";domain=.".concat(domain, ";path=/");
      }
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(cname) {
      if (isLocalHost) {
        return LocalStorage.removeItem(cname);
      }

      this.setCookie(cname, '', -10);
    }
  }]);

  return Cookie;
}();

export default Cookie;