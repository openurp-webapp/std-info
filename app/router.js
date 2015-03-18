import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('students', function() {
    this.route('index', { path: '/:pageIndex/:pageSize' });
    this.route('info');
    this.route('edit');
  });
  this.resource('adminclass', function() {
    this.route('index', { path: '/:pageIndex/:pageSize' });
  });
});

export default Router;
