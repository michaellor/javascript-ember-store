import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  // productCosts: [],

  add(product) {
    this.get('products').pushObject(product);
    // this.get('productCosts').push(product.cost);
  }
  //
  // sum(productCosts) {
  //   var totalCost = 4;
  //   productCosts = this.get('products');
  //   console.log(productCosts);
  //   for(var i = 0; i < productCosts.length; i++) {
  //     console.log(i);
  //     totalCost += 1;
  //
  //   }
  //   console.log(totalCost);
  //   return totalCost;
  // }
});
