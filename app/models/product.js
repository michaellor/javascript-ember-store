import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  feedback: DS.hasMany('feedback', {async: true})
});
