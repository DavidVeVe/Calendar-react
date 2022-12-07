import { DAYS_OF_THE_WEEK } from "./constants";

const createDate = (y, m, d) => new Date(y, m, d)
const setDate = (y, m, d) => createDate(y, m, d);
const setMonthName = (date) => date.toLocaleString('default', { month: 'long' })
const setPrevMonthName = (y, m, d) => createDate(y, m, d).toLocaleString('default', { month: 'long' })
const getDaysInMonth = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
};
const monthConfig = (daysInCurrentMonth, y, m) => {
    return [...Array(daysInCurrentMonth).keys()].map((day) => {
        const dayName = DAYS_OF_THE_WEEK[new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(setDate(y, m, day + 1 ))]
        return { dayNumber: day + 1, dayName  }
    })
}

export default { setDate, setMonthName, getDaysInMonth, monthConfig, setPrevMonthName }
