import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    costSum() {
      var totalCost = 0;
      products = shoppingCart.products;

      for(var i = 0; i < products.length; i++) {
        console.log(i);
        totalCost += product.cost;
      }
      console.log(totalCost);
      return totalCost;
    }
  }
});
