/**
 * Description: Get classnames for calendar day
 * @param condition
 * @returns {{elementClassName: (string|string), blockClassName: (string|string)}}
 */
export const getClassNames = (condition) => {
    const initialElementClassName = "calendar-day";
    const initialBlockClassName = "calendar-day__number";
    return {
        elementClassName: condition
            ? `${initialElementClassName}--is-from-prev-month`
            : initialElementClassName,
        blockClassName: condition
            ? `${initialBlockClassName}--is-from-prev-month`
            : initialBlockClassName,
    };
};
