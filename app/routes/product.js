import Ember from 'ember';

export default Ember.Route.extend({

  totalRating: Ember.computed('feedback.rating', function() {

    var rating = 0;
    console.log("it's me", rating);
    var feedbackrating = this.get('feedback').get('rating');

    for(var i = 0; i < 1; i++) {
      rating += feedbackrating;
    }
    return rating/(2);
  }),

  actions: {
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      newFeedback.save();
      console.log(params);
    }
  }
});
