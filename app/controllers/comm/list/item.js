import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    select : function(){
      // console.log(this.model);
      // this.model.set('isSelect', !this.model.get('isSelect'));
      //this.model.isSelect = !this.model.isSelect;
      this.set('isSelect', !this.get('isSelect'));
    }
  }
});
