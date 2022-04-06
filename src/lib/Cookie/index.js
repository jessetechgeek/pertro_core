import { isLocalHost } from '../Utilities';
import LocalStorage from '../LocalStorage';

class Cookie {
  static getCookie(cname) {
    if (isLocalHost) {
      return LocalStorage.getItem(cname);
    }
    var name = cname + '=';
    var decodedCookie =
      typeof document !== 'undefined'
        ? decodeURIComponent(document.cookie)
        : '';
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

  static setCookie(
    cname,
    cvalue,
    exdays = 365,
    domain = process.env.REACT_APP_HOST_DOMAIN
  ) {
    if (isLocalHost) {
      return LocalStorage.setItem(cname, cvalue);
    }
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    if (typeof document !== 'undefined') {
      document.cookie =
        cname + '=' + cvalue + ';' + expires + `;domain=.${domain};path=/`;
    }
  }

  static removeCookie(cname) {
    if (isLocalHost) {
      return LocalStorage.removeItem(cname);
    }
    this.setCookie(cname, '', -10);
  }
}

export default Cookie;
