import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    select : function(){
      var isSelect = this.get('isSelect') || false;
      this.set('isSelect', isSelect);
    }
  }
});
