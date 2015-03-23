import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
//   host: 'http://192.168.103.24:8080/edu-base-ds/default/base'
// });

export default DS.BeangleAdapter.extend({
  host: 'http://192.168.103.24:8080/edu-base-ds/default/base'
});
