import Ember from 'ember';

export default Ember.Component.extend({
  addFeedback: false,
  rating: 1,

  actions: {
    showFeedbackForm() {
      this.set('addFeedback', true);
    },

    selectRating() {
      this.set('rating', event.target.value);
    },

    saveFeedback() {
      var params = {
        user: this.get('user'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        product: this.get('product')
      };
      // console.log(params);
      this.set('addFeedback', false);
      this.sendAction('saveFeedback', params);
    }
  }
});
