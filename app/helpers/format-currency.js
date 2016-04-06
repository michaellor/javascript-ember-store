import Ember from 'ember';

export function formatCurrency(params/*, hash*/) {
  var value = params[0],
  dollars = value.toFixed(2),
  sign = '$';

  return `${sign}${dollars}`;
};

export default Ember.Helper.helper(formatCurrency);
