import Ember from 'ember';

export default Ember.PageController.extend({
  searchField : Ember.Object.create({
    'studentCCode' : '',
    'studentPPersonNName' : ''
  })
});
