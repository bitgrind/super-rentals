import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rentals'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rentals', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
