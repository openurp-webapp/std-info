import Ember from 'ember';

export default Ember.View.extend({
  templateName : 'comm/edit/item',
  label:'',
  text:'',
  size: 12,
  labelClass : 'col-sm-4 control-label',
  textClass : 'col-sm-8',
  divclass : function (){
  	console.log('divclass')
  	return 'col-md-' + this.size;
  }.property('size')
});
