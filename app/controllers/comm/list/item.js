import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    select : function(){
      this.set('isSelect', !this.get('isSelect'));
    }
  }
});
