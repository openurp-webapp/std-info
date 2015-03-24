import Ember from 'ember';

export default Ember.View.extend({
  size: 6,
  labelClass : 'col-sm-4 control-label',
  textClass : 'col-sm-8',
  templateName : 'comm/info/item',
  label:'',
  text:'',
  divclass : function (){
  	console.log('divclass')
  	return 'col-md-' + this.size;
  }.property('size')
});
