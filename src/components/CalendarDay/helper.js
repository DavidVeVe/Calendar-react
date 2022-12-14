/**
 * Description: Get classnames for calendar day
 * @param prevMonthCondition {boolean}
 * @param isActive {boolean}
 * @returns {{elementClassName: (string|string), blockClassName: (string|string)}}
 */
export const getClassNames = (prevMonthCondition, isActive) => {
  const initialElementClassName = `calendar-day`;
  const initialBlockClassName = `calendar-day__number`;

  const elementClassWithPrevMonthCondition = prevMonthCondition
    ? `${initialElementClassName} ${initialElementClassName}--is-from-prev-month`
    : initialElementClassName;
  const blockClassWithPrevMonthCondition = prevMonthCondition
    ? ` ${initialBlockClassName} ${initialBlockClassName}--is-from-prev-month`
    : initialBlockClassName;

  const elementClassNameActiveDay = isActive
    ? ` ${initialElementClassName}--is-active`
    : "";
  const blockClassNameActiveDay = isActive
    ? ` ${initialBlockClassName}--is-active`
    : "";

  return {
    elementClassName: `${elementClassWithPrevMonthCondition}${elementClassNameActiveDay}`,
    blockClassName: `${blockClassWithPrevMonthCondition}${blockClassNameActiveDay}`,
  };
};
