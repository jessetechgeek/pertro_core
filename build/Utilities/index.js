var decodeUriComponent = require('decode-uri-component');

export var isLocalHost = typeof window !== 'undefined' && window.location.origin.indexOf('localhost') > -1;
export var historyPush = function historyPush(_ref) {
  var history = _ref.history,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '/' : _ref$path,
      _ref$domain = _ref.domain,
      domain = _ref$domain === void 0 ? '/' : _ref$domain,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search;

  if (history) {
    history.push("".concat(path).concat(search));
  } else {
    window.location.assign("".concat(domain).concat(path).concat(search));
  }
};
export var historyReplace = function historyReplace(_ref2) {
  var history = _ref2.history,
      _ref2$path = _ref2.path,
      path = _ref2$path === void 0 ? '/' : _ref2$path,
      _ref2$domain = _ref2.domain,
      domain = _ref2$domain === void 0 ? '/' : _ref2$domain,
      _ref2$search = _ref2.search,
      search = _ref2$search === void 0 ? '' : _ref2$search;

  if (history) {
    history.replace("".concat(path).concat(search));
  } else {
    window.location.replace("".concat(domain).concat(path).concat(search));
  }
};
export var getUrlVars = function getUrlVars() {
  try {
    var vars = {};
    var href = window.location.search;
    href = decodeUriComponent(href);
    href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  } catch (e) {
    return '';
  }
};
export var getParamFromUrlSearch = function getParamFromUrlSearch(parameter) {
  var defaultvalue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var urlparameter = defaultvalue;

  if (typeof window !== 'undefined' && window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }

  return urlparameter;
};
export var removeQueryParam = function removeQueryParam(key, sourceURL) {
  var rtn = sourceURL.split('?')[0],
      param,
      params_arr = [],
      queryString = sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';

  if (queryString !== '') {
    params_arr = queryString.split('&');

    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split('=')[0];

      if (param === key) {
        params_arr.splice(i, 1);
      }
    }

    rtn = rtn + '?' + params_arr.join('&');
  }

  return rtn;
};