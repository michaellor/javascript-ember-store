import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCost: Ember.computed('shoppingCart.products.length', function() {
    var cartTotal = 0;
    var shoppingCart = this.get('shoppingCart');
    for(var i = 0; i < shoppingCart.products.length; i++) {
      cartTotal += (shoppingCart.get('products'))[i].get('cost');
    }
    return cartTotal;
  }),
});
