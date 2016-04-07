import Ember from 'ember';

export default Ember.Component.extend({

  totalRating: Ember.computed('feedback.rating', function() {

    var rating = 0;
    var ratingsArray = [];


    var feedbackrating = this.get('feedback').get('rating');
    console.log("it's me", feedbackrating);
    for(var i = 0; i < 1; i++) {
      rating += feedbackrating;
    }
    return rating/(2);
  }),
});
