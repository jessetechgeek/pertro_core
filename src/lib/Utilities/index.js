const decodeUriComponent = require('decode-uri-component');

export const isLocalHost =
  typeof window !== 'undefined' &&
  window.location.origin.indexOf('localhost') > -1;

export const historyPush = ({
  history,
  path = '/',
  domain = '/',
  search = '',
}) => {
  if (history) {
    history.push(`${path}${search}`);
  } else {
    window.location.assign(`${domain}${path}${search}`);
  }
};

export const historyReplace = ({
  history,
  path = '/',
  domain = '/',
  search = '',
}) => {
  if (history) {
    history.replace(`${path}${search}`);
  } else {
    window.location.replace(`${domain}${path}${search}`);
  }
};

export const getUrlVars = () => {
  try {
    var vars = {};
    let href = window.location.search;
    href = decodeUriComponent(href);
    href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  } catch (e) {
    return '';
  }
};

export const getParamFromUrlSearch = (parameter, defaultvalue = '') => {
  var urlparameter = defaultvalue;
  if (
    typeof window !== 'undefined' &&
    window.location.href.indexOf(parameter) > -1
  ) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
};

export const removeQueryParam = (key, sourceURL) => {
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
