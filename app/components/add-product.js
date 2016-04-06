import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,

actions: {
  showNewProductForm() {
    this.set('addNewProduct', true);
  },

  saveNewProduct(){
    var params = {
      title: this.get('title'),
      description: this.get('description'),
      cost: parseInt(this.get('cost')),
      feedback: []
    };
    this.set('addNewProduct', false);
    this.sendAction('saveNewProduct', params);
  }
}
});
