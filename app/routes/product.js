import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      newFeedback.save();
      console.log(params);
    }
  }
});
