import Ember from 'ember';

export function navLi(value) {
  console.log('nav-li', value, this._controller.currentRouteName, this._controller.currentRouteName.indexOf(value) == 0);
  if(this._controller.currentRouteName && this._controller.currentRouteName.indexOf(value) === 0){
    return new Ember.Handlebars.SafeString('active');
  }
  return '';
}

export default Ember.Handlebars.makeBoundHelper(navLi);
