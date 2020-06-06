import * as moment from 'moment';

/* eslint-disable react/destructuring-assignment */
const isMoment = (props, propName, componentName) => {
  const prop = props[propName];
  if (!moment.isMoment(prop)) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
  }
};
/* eslint-enable */

export default isMoment;
