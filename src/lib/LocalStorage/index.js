class LocalStorage {
  static getItem(key, defaultValue = '') {
    if (
      typeof window === 'undefined' ||
      typeof localStorage === 'undefined' ||
      !localStorage.getItem(key)
    ) {
      return defaultValue;
    }
    return JSON.parse(localStorage.getItem(key));
  }

  static setItem(key, value) {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key) {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
