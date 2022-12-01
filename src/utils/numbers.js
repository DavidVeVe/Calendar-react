/* eslint no-param-reassign: 0 */

const numbers = {
  isNumeric: (num) => !Number.isNaN(parseFloat(num)) && Number.isFinite(parseFloat(num)),
  toInt: (num, defaultValue = 0) => (numbers.isNumeric(num) ? parseInt(num, 10) : defaultValue),
  toFloat: (num, defaultValue = 0) => (numbers.isNumeric(num) ? parseFloat(num) : defaultValue),
  round(value, exp) {
    if (exp === 0) {
      return Math.round(value);
    }

    if (typeof exp === 'undefined') {
      exp = -2;
    }

    value = +value;
    exp = +exp;

    if (Number.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }

    value = value.toString().split('e');
    value = Math.round(+(`${value[0]}e${value[1] ? (+value[1] - exp) : -exp}`));
    // Shift back
    value = value.toString().split('e');
    return +(`${value[0]}e${value[1] ? (+value[1] + exp) : exp}`);
  },
  formatNumber(value) {
    let result;
    if (numbers.isNumeric(value)) {
      result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return result;
  },
  abbreviateNumber: (amount, userCurrency) => {
    // Alter numbers larger than 1k
    if (amount >= 1e3) {
      const units = ['k', 'M', 'B', 'T'];

      // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
      const unit = Math.floor(((amount).toFixed(0).length - 1) / 3) * 3;
      // Calculate the remainder
      const num = (amount / (`1e${unit}`)).toFixed(2);
      const unitname = units[Math.floor(unit / 3) - 1];

      // output number remainder + unitname
      return userCurrency + num + unitname;
    }

    // return formatted original number
    return userCurrency + numbers.fixNumber(numbers.round(amount), 2);
  },
  /**
   * fixNumber
   * @description - Fix number to x number of decimal digits
   * @param {number} value - Number to fix
   * @param {number} exp - Number of decimal digits
   * @return {string}
   */
  fixNumber(value, exp) {
    const hasDecimalPoints = value % 1 !== 0;
    if (exp === 0 || !numbers.isNumeric(value) || !hasDecimalPoints) {
      return value;
    }

    if (typeof exp === 'undefined') {
      exp = 2;
    }
    return numbers.toFloat(value).toFixed(exp);
  },
};

export default numbers;
