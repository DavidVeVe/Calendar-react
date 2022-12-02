const setDate = (y, m, d) => new Date(y, m, d);
const setMonthName = (date) => date.toLocaleString('default', { month: 'long' })
const getDaysInMonth = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
};

export default { setDate, setMonthName, getDaysInMonth }
