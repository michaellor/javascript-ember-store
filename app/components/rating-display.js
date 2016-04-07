import Ember from 'ember';

export default Ember.Component.extend({

  totalRating: Ember.computed('product.feedback.length', function() {
    var rating = 0;
    var product = this.get('product');
    console.log(product.feedback.rating);
    for(var i = 0; i < product.feedback.length; i++) {
      rating += (product.get('feedback'))[i].get('rating');
    }
    return rating;
  }),
});
