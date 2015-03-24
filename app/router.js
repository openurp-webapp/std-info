import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('students', function() {
    this.route('index', { path: '/:pageIndex/:pageSize' });
    this.route('add');
    this.route('info', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });
  this.resource('adminclass', function() {
    this.route('index', { path: '/:pageIndex/:pageSize' });
  });
  this.resource('nations', function() {
    this.route('index', { path: '/:pageIndex/:pageSize' });
    this.route('add');
    this.route('info', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });
});

export default Router;
