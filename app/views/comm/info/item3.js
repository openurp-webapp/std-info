import Ember from 'ember';

export default Ember.View.extend({
  size: 4,
  labelClass : 'col-sm-5 control-label',
  textClass : 'col-sm-7',
  templateName : 'comm/info/item',
  label:'',
  text:'',
  divclass : function (){
  	console.log('divclass')
  	return 'col-md-' + this.size;
  }.property('size')
});
