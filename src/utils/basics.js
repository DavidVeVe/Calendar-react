const basics = {
  /**
   * To check if a value is defined i.e should not be equal to undefined or null.
   * @param value
   * @returns {boolean}
   */
  isValueDefined: (value) => !(typeof value === 'undefined' || value === null),
  debounce: debounceWrapper(),
};

/**
 * debounceWrapper {func} returns a func, which contains config object in scope for different keys
 */
function debounceWrapper() {
  const config = {
    timeout: null,
  };

  /**
   * debounceFn {func} to wait for some milliseconds after which the last func executes,
   * Keys should be passed unique for different context
   * @param func any function to execute
   * @param key {string} will execute the func with same keys
   */
  return function debounceFn(func, key = 'timeout', wait = 1000) {
    if (config[key] === undefined) {
      config[key] = null;
    }
    return function executedFunction(...args) {
      const later = () => {
        delete config[key];
        func(...args);
      };
      clearTimeout(config[key]);
      config[key] = setTimeout(later, wait);
    };
  };
}
export default basics;
