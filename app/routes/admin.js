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
        var product_delete = product.get('feedback').map(function(feedback) {
          return feedback.destroyRecord();
        });
        Ember.RSVP.all(product_delete).then(function() {
          return product.destroyRecord();
        });
      }
    },

    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          product.set(key, params[key]);
        }
      });
      product.save();
    },

    saveNewProduct(params) {
      console.log(params);

      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    }
  }
});
