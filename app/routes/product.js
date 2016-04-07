import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('product', params.product_id)
  },

  actions: {
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      newFeedback.save();
      console.log(params);
    }
  }
});
