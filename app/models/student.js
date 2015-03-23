import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  code : attr(),
  person : belongsTo('person')
  // person : DS.EmbeddedRecordsMixin
});
