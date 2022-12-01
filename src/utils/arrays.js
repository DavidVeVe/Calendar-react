import objects from './objects';

const DEFAULT_SORTING = 'ascending';

export const { isArray } = Array;
export const isArrayEmpty = (arr) => !Array.isArray(arr) || !arr.length;
export const sortAlphabeticaly = (arr, sortField, order = DEFAULT_SORTING) => {
  if (isArray(arr)) {
    const result = [...arr];
    return result.sort((a, b) => {
      if (objects.isObject(a) && objects.isObject(b)) {
        return order === DEFAULT_SORTING
          ? String(a[sortField]).localeCompare(String(b[sortField]))
          : String(b[sortField]).localeCompare(String(a[sortField]));
      }
      return -1;
    });
  }
  return arr;
};
// eslint-disable-next-line no-undef
export const getUniqueArrayItems = (arr) => [...new Set(arr)];
export const sortAlphanumeric = (arr, property, order = DEFAULT_SORTING) => {
  if (isArray(arr)) {
    return arr.sort((a, b) => {
      let valueA = a;
      let valueB = b;
      if (order !== DEFAULT_SORTING) {
        valueA = b;
        valueB = a;
      }
      if (objects.isObject(valueA) && objects.isObject(valueB)) {
        valueA = valueA[property];
        valueB = valueB[property];
      }

      const numA = !Number.isNaN(Number(valueA));
      const numB = !Number.isNaN(Number(valueB));

      if (numA && numB) {
        return Number(valueA) - Number(valueB);
      }
      if (numA) return -1;
      if (numB) return 1;

      if (valueA && valueB) {
        return valueA.localeCompare(valueB);
      }
      if (valueA) return -1;
      if (valueB) return 1;

      return 1;
    });
  }
  return arr;
};

export const deepCopyData = (dataArray) => {
  const copiedData = [];
  if (isArray(dataArray)) {
    dataArray.forEach((el) => {
      if (isArray(el)) {
        copiedData.push(deepCopyData(el));
      } else if (objects.isObject(el)) {
        copiedData.push(JSON.parse(JSON.stringify(el)));
      } else {
        copiedData.push(el);
      }
    });
  }
  return copiedData;
};

/**
 * Always returns an array
 * @param arr{*} Expected to be an array
 * @return {array}
 */
export const ensureArray = (arr) => (isArray(arr) ? arr : []);

/**
 * Safely checks the length of an array
 * @param arr{*} Expected to be an array
 * @param length{number} Target length
 * @return {boolean}
 */
export const isArrayWithLength = (arr, length) => isArray(arr) && arr.length === length;
