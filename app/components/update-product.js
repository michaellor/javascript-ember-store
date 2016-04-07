import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateProduct(product) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        listings: this.get('listings'),
        product: this.get('product')
      };
      console.log("got here", product)
      this.sendAction('updateProduct', product, params);
    }
  }
});
