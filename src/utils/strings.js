export {
  isString,
  isStringWithText,
  isEmpty,
  capitalizeFirst,
  lowerCaseFirst,
  toLower,
  isEmptyTrim,
};

function isEmpty(value) {
  return isString(value) && value.length === 0;
}

function isEmptyTrim(value) {
  return isString(value) && value.trim().length === 0;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns boolean whether value is a string, with length greater than 0.
 * @param value{*}
 * @return {boolean}
 */
function isStringWithText(value) {
  return isString(value) && value.length > 0;
}

function capitalizeFirst(value) {
  return isString(value) && value.charAt(0).toUpperCase() + value.slice(1);
}

function lowerCaseFirst(value) {
  return isString(value) && value.charAt(0).toLowerCase() + value.slice(1);
}

function toLower(value) {
  return String(value).toLowerCase();
}
