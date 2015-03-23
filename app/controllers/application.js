import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions:{
    select : function(){
      setTimeout(function(){
        Ember.$('.nav-tabs li.active').removeClass('active');
        Ember.$('.nav-tabs .active').parent().addClass('active');
      }, 100);
    }
  }
});
