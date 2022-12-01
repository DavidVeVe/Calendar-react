import {
  capitalizeFirst,
  isEmpty,
  isString,
  isStringWithText,
  lowerCaseFirst,
} from './strings';
import objects from './objects';
import numbers from './numbers';
import dates from './dates';
import basics from './basics';
import {
  mockDate,
  mockArrayNoObject,
  mockResultDataDescending,
  mockResultDate,
  mockArray,
  mockResultDataAscending,
  unorderedArrayObjects,
  ascArrayObjects,
  descArrayObjects,
  unorderedArray,
  ascArray,
  mockDeepObject,
} from '../../../test/unit/mockData/utilsMockData';

import {
  isArray,
  getUniqueArrayItems,
  isArrayEmpty,
  sortAlphabeticaly,
  sortAlphanumeric,
  ensureArray,
  isArrayWithLength,
} from './arrays';

describe('basics isValueDefined func', () => {
  test('Should return true when value is defined', () => {
    expect(basics.isValueDefined({ product: 'DAE' })).toBeTruthy();
  });
  test('Should return false when value is undefined', () => {
    expect(basics.isValueDefined(undefined)).toBeFalsy();
  });
  test('Should return false when value is null', () => {
    expect(basics.isValueDefined(null)).toBeFalsy();
  });
});

describe('basics debounce func', () => {
  test('Should call the last function after 1 sec for same key passed', () => {
    const mockFn = jest.fn();

    jest.useFakeTimers();
    const key = 'SAME_KEY';
    basics.debounce(() => (mockFn(1)), key)();
    basics.debounce(() => (mockFn(2)), key)();
    expect(mockFn).not.toBeCalled();
    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalledWith(2);
  });
  test('Should call the all the functions after 1 sec for different key passed', () => {
    const mockFn = jest.fn();

    jest.useFakeTimers();
    const keyFuncOne = 'KEY_FUNCTION_ONE';
    const keyFuncTwo = 'KEY_FUNCTION_TWO';
    basics.debounce(() => (mockFn(1)), keyFuncOne)();
    basics.debounce(() => (mockFn(2)), keyFuncTwo)();
    expect(mockFn).not.toBeCalled();
    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

describe('abbreviateNumber func', () => {
  test('Should return parsed number if the mount is greater than 1000', () => {
    expect(numbers.abbreviateNumber(1001, '$')).toBe('$1.00k');
  });

  test('Should return parsed number if the mount is greater than 1000 and fix to two digits', () => {
    expect(numbers.abbreviateNumber(1500, '$')).toBe('$1.50k');
  });

  test('Should return number round without parse with currency if is less than 1000', () => {
    expect(numbers.abbreviateNumber(999, '$')).toBe('$999');
  });

  test('Should return number round without parse with currency if is less than 1000 and fix to two digits', () => {
    expect(numbers.abbreviateNumber(18.6, '$')).toBe('$18.60');
  });
});

describe('Strings page', () => {
  test('Should return true because is an empty array', () => {
    expect(isEmpty('')).toBeTruthy();
  });
  test('Should return false because is a number', () => {
    expect(isString(5)).toBeFalsy();
  });
  test('Should return first letter capitalized', () => {
    expect(capitalizeFirst('capitalized')).toEqual('Capitalized');
  });
  test('Should return first letter capitalized', () => {
    expect(lowerCaseFirst('Capitalized')).toEqual('capitalized');
  });
  test('Should return the correct boolean value depending on value', () => {
    expect(isStringWithText('')).toBe(false);
    expect(isStringWithText(null)).toBe(false);
    expect(isStringWithText('a')).toBe(true);
  });
});

describe('Objects page', () => {
  test('Should return true', () => {
    expect(objects.isObjectEmpty({})).toBeTruthy();
    expect(objects.isObject({})).toBeTruthy();
    expect(objects.isFunction(() => {
    })).toBeTruthy();
    expect(objects.hasProperty({ 1: 1 }, 1)).toBeTruthy();
    expect(objects.hasProperties({ 1: 1, 2: 2 })).toBeTruthy();
  });
  test('Should return false', () => {
    expect(objects.isObjectEmpty({ 1: 1 })).toBeFalsy();
    expect(objects.isObject(5)).toBeFalsy();
    expect(objects.isFunction({})).toBeFalsy();
    expect(objects.hasProperty({ 1: 1 }, 5)).toBeFalsy();
    expect(objects.hasProperties({})).toBeFalsy();
  });
  describe('getPropValueFromString', () => {
    test('Should return nested value from object based on string key dot separated', () => {
      const value = objects.getPropValueFromString({ a: { a1: { a2: 'x' } } }, 'a.a1.a2');
      expect(value).toEqual('x');
    });
    test('Should return value from object based on string key', () => {
      const value = objects.getPropValueFromString({ a: 'x' }, 'a');
      expect(value).toEqual('x');
    });
  });

  describe('hasValidProperties', () => {
    test('Returns true when object contains values ', () => {
      expect(objects.areKeysDefined({ a: 1, b: true }, 'a', 'b')).toBeTruthy();
      expect(objects.areKeysDefined({ a: 0 }, 'a')).toBeTruthy();
    });

    test('Returns false when object contains values ', () => {
      const value = objects.areKeysDefined({ a: 1 }, 'x');
      expect(value).toBeFalsy();
    });

    test('Returns false when invalid arguments ', () => {
      expect(objects.areKeysDefined()).toBeFalsy();
      expect(objects.areKeysDefined(null)).toBeFalsy();
      expect(objects.areKeysDefined({ a: 1 }, '')).toBeFalsy();
      expect(objects.areKeysDefined({ a: 1 }, null)).toBeFalsy();
    });
  });

  test('it has to return false when invalid params are sent', () => {
    expect(objects.hasProperties()).toBeFalsy();
  });

  describe('ensureObject', () => {
    test('should always return an object', () => {
      expect(objects.ensureObject()).toBeInstanceOf(Object);
      expect(objects.ensureObject(0)).toBeInstanceOf(Object);
      expect(objects.ensureObject(null)).toBeInstanceOf(Object);
    });
  });

  describe('isObjectWithData', () => {
    test('Should return true if object has properties', () => {
      expect(objects.isObjectWithData({ a: null, b: null })).toBe(true);
    });
    test('Should return false if object is empty or is not object', () => {
      expect(objects.isObjectWithData({})).toBe(false);
      expect(objects.isObjectWithData(null)).toBe(false);
    });
  });

  describe('getActionCreator', () => {
    test('Should return function that outputs action object', () => {
      const sample = objects.getActionCreator('TYPE');
      expect(sample('PAYLOAD')).toStrictEqual({ type: 'TYPE', payload: 'PAYLOAD' });
    });
  });

  describe('deepLookup', () => {
    const { deepLookup } = objects;

    test('Should return first argument if it is not an object', () => {
      expect(deepLookup(null, 'any')).toBe(null);
      expect(deepLookup(0, 'any')).toBe(0);
    });
    test('Should return first argument if no accessors were provided', () => {
      expect(deepLookup(mockDeepObject)).toBe(mockDeepObject);
    });
    test('Should recurse until all accessors have been handled', () => {
      expect(deepLookup(mockDeepObject, 'a', 'b')).toBe(mockDeepObject.a.b);
    });
  });
  describe('isInstanceOf func', () => {
    test('Should return true when _object is an instance of _class', () => {
      expect(objects.isInstanceOf([1, 2, 3], Array)).toBeTruthy();
    });
    test('Should return false when _object is not an instance of _class', () => {
      expect(objects.isInstanceOf({}, Array)).toBeFalsy();
    });
    test('Should return false when _object is null', () => {
      expect(objects.isInstanceOf(null, Array)).toBeFalsy();
    });
    test('Should return false when _object is undefined', () => {
      expect(objects.isInstanceOf(undefined, Array)).toBeFalsy();
    });
    test('Should return false when _object is invalid', () => {
      expect(objects.isInstanceOf(3, Array)).toBeFalsy();
    });
    test('Should return false when _class is null', () => {
      expect(objects.isInstanceOf([], null)).toBeFalsy();
    });
    test('Should return false when _class is undefined', () => {
      expect(objects.isInstanceOf([], undefined)).toBeFalsy();
    });
    test('Should return false when _class is invalid', () => {
      expect(objects.isInstanceOf([], 3)).toBeFalsy();
    });
  });
  describe('hasPropertiesWithValues', () => {
    test('Should return true if object has a property with a string as value', () => {
      expect(objects.hasPropertiesWithValues({ prop: 'David Velazquez' })).toBeTruthy();
    });
    test('Should return true if object has a property with a number as value', () => {
      expect(objects.hasPropertiesWithValues({ prop: 1 })).toBeTruthy();
    });
    test('Should return true if object has a property with an array as value', () => {
      expect(objects.hasPropertiesWithValues({ prop: [] })).toBeTruthy();
    });
    test('Should return true if object has a property with an object as value', () => {
      expect(objects.hasPropertiesWithValues({ prop: {} })).toBeTruthy();
    });

    test('Should return false if object is not passed', () => {
      expect(objects.hasPropertiesWithValues()).toBeFalsy();
    });
    test('Should return false if an array is passed', () => {
      expect(objects.hasPropertiesWithValues([])).toBeFalsy();
    });
    test('Should return false if object has a property with an undefined value', () => {
      expect(objects.hasPropertiesWithValues({ prop: undefined })).toBeFalsy();
    });
    test('Should return false if object has a property with a null value', () => {
      expect(objects.hasPropertiesWithValues({ prop: null })).toBeFalsy();
    });
  });
});

describe('Numbers page', () => {
  test('Should return true because is a number', () => {
    expect(numbers.isNumeric(200)).toBeTruthy();
  });
  describe('Function toInt cases', () => {
    test('Should return true', () => {
      expect(numbers.toInt(5)).toBeTruthy();
    });
    test('Should retun 10 in number type', () => {
      expect(numbers.toInt('10')).toBe(10);
    });
    test('Should return 0', () => {
      expect(numbers.toInt({})).toBe(0);
    });

    test('Should return default sent value', () => {
      expect(numbers.toInt({}, 6)).toBe(6);
    });
  });
  describe('Function round cases', () => {
    test('Should return 10', () => {
      expect(numbers.round(9.8, 0)).toBe(10);
    });
    test('Should return the same value', () => {
      expect(numbers.round(9.8)).toBe(9.8);
    });
    test('Should return NaN', () => {
      expect(numbers.round('h', 'h')).toBe(NaN);
    });
  });
  describe('Function formatNumber cases', () => {
    test('Should return ', () => {
      expect(numbers.formatNumber(1000)).toBe('1,000');
    });
  });
  describe('fixNumber', () => {
    test('Should return the same value', () => {
      expect(numbers.fixNumber(9.8, 0)).toBe(9.8);
      expect(numbers.fixNumber(5, 0)).toBe(5);
      expect(numbers.fixNumber(5)).toBe(5);
      expect(numbers.fixNumber(5, 2)).toBe(5);
      expect(numbers.fixNumber(5, 'h')).toBe(5);
      expect(numbers.fixNumber('h')).toBe('h');
      expect(numbers.fixNumber('h', 2)).toBe('h');
      expect(numbers.fixNumber('h', 'h')).toBe('h');
    });
    test('Should return the value as string with 2 digits fixed', () => {
      expect(numbers.fixNumber(9.8)).toBe('9.80');
    });
    test('Should return the value as string with 2 digits fixed', () => {
      expect(numbers.fixNumber(9.204, 2)).toBe('9.20');
    });
    test('Should return the value as string with 2 digits fixed', () => {
      expect(numbers.fixNumber(-9.204, 2)).toBe('-9.20');
    });

    test('returns valid numbers when incorrect parameters are sent', () => {
      expect(numbers.fixNumber(-9.20, 2)).toBe('-9.20');
      expect(numbers.fixNumber('28.4', 2)).toBe('28.40');
      expect(numbers.fixNumber('-28.4', 2)).toBe('-28.40');
      expect(numbers.fixNumber('28.4 Stone', 2)).toBe('28.40');
      expect(numbers.fixNumber(null, 2)).toBe(null);
      expect(numbers.fixNumber()).toBe(undefined);
      expect(numbers.fixNumber('')).toBe('');
      expect(numbers.fixNumber(' ')).toBe(' ');
      expect(numbers.fixNumber(' .4')).toBe('0.40');
      expect(numbers.fixNumber('-.4')).toBe('-0.40');
    });
  });
});

describe('Dates page', () => {
  test('Should return true', () => {
    expect(dates.isDate(mockDate)).toBeTruthy();
  });
  test('Should return the date in ordinal date format', () => {
    expect(dates.toOrdinalDateFormat(mockDate)).toBe(mockResultDate);
  });
  test('Should return empty string', () => {
    expect(dates.toOrdinalDateFormat('example')).toBe('');
  });

  xdescribe('formatDate', () => {
    test('Returns valid formatted date when valid date object is sent', () => {
      expect(dates.formatDate(new Date('01-01-2020'), 'MMMM, YYYY')).toBe('January, 2020');
    });
    test('Returns valid formatted date when valid date type is sent', () => {
      expect(dates.formatDate('01-01-2020', 'MMMM, YYYY')).toBe('January, 2020');
      expect(dates.formatDate(new Date('01-01-2020').getTime(), 'MMMM, YYYY')).toBe('January, 2020');
    });
    test('Returns empty string when invalid parameters are sent', () => {
      expect(dates.formatDate('', 'MMMM, YYYY')).toBe('');
      expect(dates.formatDate()).toBe('');
    });
    test('Returns a date without utc', () => {
      const date1 = 'Wed Jul 01 2020 00:00:00 GMT-0500 (Central Daylight Time)';
      expect(dates.formatDate(date1, 'YYYY-MM')).toBe('2020-07');
    });
    test('Returns a date with utc', () => {
      const date1 = 'Mon Jun 01 2020 00:00:00 GMT+0500 (West Kazakhstan Time)';
      expect(dates.formatDate(date1, 'YYYY-MM', false)).toBe('2020-05');
    });
  });
});

describe('Arrays page', () => {
  test('Should return true', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArrayEmpty([])).toBeTruthy();
  });
  test('Should return the same value received because it is not array', () => {
    expect(sortAlphabeticaly({ 1: 1 }, 1)).toStrictEqual({ 1: 1 });
  });
  test('Should return an array with the unique values', () => {
    expect(getUniqueArrayItems(['Ame', 'Bal', 'Ind', 'Ame', 'Bal'])).toStrictEqual(['Ame', 'Bal', 'Ind']);
  });
  test('Should return an equal array received', () => {
    expect(sortAlphabeticaly(mockArray)).toStrictEqual(mockArray);
  });
  test('Should return an order array in ascending form', () => {
    expect(sortAlphabeticaly(mockArray, 'choice')).toEqual(mockResultDataAscending);
  });
  test('Should return an order array in descending form', () => {
    expect(sortAlphabeticaly(mockArray, 'choice', 'descending')).toEqual(mockResultDataDescending);
  });
  xtest('Should return the same value received because is not an object array', () => {
    expect(sortAlphabeticaly(mockArrayNoObject)).toEqual(mockArrayNoObject);
  });
  test('Should return an ascending ordered alphanumeric array of objects', () => {
    expect(sortAlphanumeric(unorderedArrayObjects, 'value')).toStrictEqual(ascArrayObjects);
  });
  test('Should return a descending ordered alphanumeric array of objects', () => {
    expect(sortAlphanumeric(unorderedArrayObjects, 'value', 'descending')).toStrictEqual(descArrayObjects);
  });
  test('Should return an ascending ordered alphanumeric array', () => {
    expect(sortAlphanumeric(unorderedArray)).toStrictEqual(ascArray);
  });
  test('Should return the same data received when is not an array', () => {
    expect(sortAlphanumeric({ 1: 1 })).toStrictEqual({ 1: 1 });
  });

  describe('ensureArray', () => {
    test('should always return an array', () => {
      expect(ensureArray()).toBeInstanceOf(Array);
      expect(ensureArray({})).toBeInstanceOf(Array);
      expect(ensureArray(null)).toBeInstanceOf(Array);
    });
    test('Should return same array', () => {
      expect(ensureArray(mockArray)).toBe(mockArray);
    });
  });

  describe('isArrayWithLength', () => {
    test('should return true', () => {
      expect(isArrayWithLength([], 0)).toBe(true);
      expect(isArrayWithLength([1, 2, 3], 3)).toBe(true);
    });
    test('Should return false', () => {
      expect(isArrayWithLength([1, 2, 3], 0)).toBe(false);
    });
  });
});
