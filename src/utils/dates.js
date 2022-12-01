import moment from 'moment';

const dates = {
  isDate: (date) => date && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(Number(date)),
  toOrdinalDateFormat: (date) => (dates.isDate(date) ? moment(date, '').format('MMM Do, YYYY') : ''),
  getDateFrom: (date) => (Date.parse(date) ? new Date(date) : null),
  /**
   * Formats dates in a secure way using using moment library
   * @param {string} date - any valid date type
   * @param {string} format - supported moment library formats
   * @returns {string}
   */
  formatDate: (date, format, utcEnabled = true) => {
    let validDate;
    if (dates.isDate(date)) {
      validDate = date;
    } else {
      const stringDate = new Date(date);
      if (dates.isDate(stringDate)) {
        validDate = stringDate;
      }
    }

    if (!utcEnabled) {
      return validDate && format ? moment(validDate).format(format) : '';
    }

    return validDate && format ? moment.utc(validDate).format(format) : '';
  },

  /**
   * Accepts an unix date and returned in local format
   * @param date
   * @param {string} format
   * @returns {string}
   */
  formatUnixDate(date, format = 'MM/DD/YYYY') {
    let validDate;
    if (dates.isDate(date)) {
      validDate = date;
    } else {
      const milliseconds = date * 1000;
      validDate = new Date(milliseconds);
    }

    return dates.formatDate(validDate, format.toUpperCase());
  },
  /**
   * @description returns difference of months between 2 dates
   * @param date1
   * @param date2
   * @returns {null|number}
   */
  diffMonths: (date1, date2) => {
    if (dates.isDate(date1) && dates.isDate(date2)) {
      let diff = (date2.getTime() - date1.getTime()) / 1000;
      diff /= (60 * 60 * 24 * 7 * 4);
      return Math.abs(Math.round(diff));
    }
    return null;
  },
};

export default dates;
