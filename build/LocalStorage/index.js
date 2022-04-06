import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, null, [{
    key: "getItem",
    value: function getItem(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof window === 'undefined' || typeof localStorage === 'undefined' || !localStorage.getItem(key)) {
        return defaultValue;
      }

      return JSON.parse(localStorage.getItem(key));
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }

      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }

      localStorage.removeItem(key);
    }
  }]);

  return LocalStorage;
}();

export default LocalStorage;