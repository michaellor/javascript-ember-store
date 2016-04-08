import Ember from 'ember';

export default Ember.Component.extend({

  totalRating: Ember.computed('product.feedback.length', function() {
    var rating = 0;
    var product = this.get('product');
    // console.log(product.get('feedback').length);
    debugger;
    for(var i = 0; i < product.feedback.length; i++) {
      rating += (product.get('feedback'))[i].get('rating');
    }
    return rating;
  }),
});
// CHEAT CODES
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   average_stars: Ember.computed('bikestore', function() {
//     var i = 0;
//     var j = 0;
//     this.bikestore.get('comments').map(function(comment){
//       j += 1;
//       i += parseInt(comment.get('bikelike'));
//     });
//      return ~~(i / j);
//   })
// });
