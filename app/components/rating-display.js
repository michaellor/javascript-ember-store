import Ember from 'ember';

export default Ember.Component.extend({

  totalRating: Ember.computed('product.feedback.length', function() {

    var rating = 0;
    var ratingsArray = [];
    var product = this.get('product');
    var feedbackrating = product.get('feedback').get('rating');
    for(var i = 0; i < 1; i++) {
      rating += feedbackrating;
    }
    return "it works";
  }),
});
