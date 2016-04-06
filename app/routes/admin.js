import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      feedback: this.store.findAll('feedback')
    });
  },

  actions: {
    deleteProduct(product) {
      if (confirm("Delete product?")){
        product.destroyRecord();
      }
    },

    saveNewProduct(params) {
      console.log(params);

      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    }
  }
});
