import Ember from 'ember';

export default Ember.EntityController.extend({
  imgurl : function(){
    // console.log(this.get('id'))
    var url = 'http://service.urp.sfu.edu.cn/sns/photo/'+
      hex_md5(this.get('code') + '@sfu.edu.cn')+'.jpg';
    return url;
  }.property('model.id')
});
