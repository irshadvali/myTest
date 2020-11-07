import _ from 'lodash';
import moment from 'moment';
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function getTotalAmount(dataInarray, monthYear) {
  let resultForMonth = dataInarray.filter((word) =>
    moment(word.date).isSame(monthYear, 'month'),
  );
  let initialValueJan = 0;
  let amountForMonth = resultForMonth.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    initialValueJan,
  );
  return amountForMonth;
}
