import basics from './basics';

const objects = {
  isObjectEmpty: (obj) => objects.isObject(obj) && Object.entries(obj).length === 0,
  isObjectWithData: (obj) => objects.isObject(obj) && Object.entries(obj).length > 0,
  isObject,
  isFunction: (obj) => obj && {}.toString.call(obj) === '[object Function]',
  hasProperties: (obj) => obj && Object.keys(obj).length > 0,
  hasPropertiesWithValues,
  areObjectsEqual,
  isDeeplyEqual,
  getPropValueFromString,
  getAction: (type, payload) => ({ type, payload }),
  getActionCreator,
  isKeyDefined: (obj, key) => objects.hasProperty(obj, key)
  && obj[key] !== undefined && obj[key] !== null,
  areKeysDefined,
  parseJSONSafetily,
  stringifySafetily,
  hasProperty,
  isInstanceOf,
  ensureObject,
  deepLookup,
};

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * @description compares two objects for shallow equality
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i += 1) {
    const propName = keys1[i];
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }

  return true;
}

/**
 * Compares is a object is equal to another in a deeply way
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
function isDeeplyEqual(x, y) {
  const { keys } = Object;
  const xType = typeof x;
  const yType = typeof y;
  return x && y && xType === 'object' && xType === yType ? (
    keys(x).length === keys(y).length
      && keys(x).every((key) => isDeeplyEqual(x[key], y[key]))
  ) : (x === y);
}

/**
 * @description iterates over object from string key
 * @param obj {object}
 * @param keyName {string}
 * @returns {object}
 */
function getPropValueFromString(obj, keyName) {
  if (typeof obj === 'undefined') return false;
  const indexSplit = keyName.indexOf('.');

  if (indexSplit > -1) {
    return getPropValueFromString(
      obj[keyName.substring(0, indexSplit)], keyName.substr(indexSplit + 1),
    );
  }

  return obj[keyName];
}

/**
 * Verifies if the properties of an object are diferent from undefined or null
 * @param objectToValidate {object} - first parameter must be the object to validate
 * @param key {string} - list of keys to validate
 * i.e : areKeysDefined({ a:1, b:2 }, 'a','b')
 */
function areKeysDefined(...args) {
  const keys = args.slice(1);
  const validKeys = keys.every((key) => (typeof key === 'string' || key instanceof String) && !!key);
  if (keys.length > 0 && validKeys) {
    return keys.every((key) => objects.isKeyDefined(args[0], key));
  }
  return false;
}

/**
 * Parses a string in a secure way
 * @param {string} data
 * @param {object} errorData - in case of error it'll be the default data
 */
function parseJSONSafetily(data, errorData = null) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return errorData;
  }
}

/**
 * Stringify an object in secure way
 * @param {string} data
 * @param {object} errorData - in case of error it'll be the default data
 */
function stringifySafetily(data, errorData = '') {
  try {
    return JSON.stringify(data);
  } catch (e) {
    return errorData;
  }
}

/**
 * Validates if an object has a property
 * @param obj {object} - object to validate
 * @param property {string} - property name
 */
function hasProperty(obj, property) {
  return objects.isObject(obj)
&& Object.prototype.hasOwnProperty.call(obj, property);
}

/**
 * Always returns an object
 * @param obj{*} Expected to be an object
 * @return {object}
 */
function ensureObject(obj) {
  return isObject(obj) ? obj : {};
}

/**
 * Safely access nested objects
 * @param obj{*} Expected to be an object
 * @param accessors {...string} Chained known properties of the object
 * @return {*}
 */
function deepLookup(obj, ...accessors) {
  if (!isObject(obj) || accessors.length === 0) {
    return obj;
  }

  const accesorsCopy = [...accessors];
  const lookup = accesorsCopy.shift();

  return deepLookup(obj[lookup], ...accesorsCopy);
}

/**
 * @param type{string} Reducer action type
 * @return {function(*): {payload: *, type: string}}
 */
function getActionCreator(type) {
  /**
   * @param payload{*} Action payload
   * @return {object}
   */
  return (payload) => ({ type, payload });
}

/**
 * If _object is null, undefined or _class is invalid then returns false,
 * else returns true if _object is an instance of _class else returns false.
 * @param _object {object}
 * @param _class
 * @returns {boolean}
 */
function isInstanceOf(_object, _class) {
  return basics.isValueDefined(_object) && (typeof _class === 'function')
    && (_object instanceof _class);
}

function hasPropertiesWithValues(obj) {
  const objValues = obj && Object.values((obj));
  return Array.isArray(objValues)
      && objValues.filter((value) => value || (value && value.length > 0)).length > 0;
}

export default objects;
