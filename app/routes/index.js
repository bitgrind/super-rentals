import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rentals');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rentals', params);
      newRental.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         rental.set(key,params[key]);
       }
      });
     rental.save();
     this.transitionTo('index');
   },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }

});
