import Ember from 'ember';

export default Ember.View.extend({
  templateName : 'comm/edit/item',
  label:'',
  text:'',
  size: 4,
  labelClass : 'col-sm-5 control-label',
  textClass : 'col-sm-7',
  divclass : function (){
  	console.log('divclass')
  	return 'col-md-' + this.size;
  }.property('size')
});
