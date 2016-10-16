Vue.component('alert-component',{
  template: '#alert-temp',
  props: ['type'],
  data: function() {
    return {
      show : true
    };
  },
  computed: {
    alertClasses: function(){
      var type = this.type;
      return{
        'alert':true,
        'alert--success': type == 'success',
        'alert--error': type == 'error',
      }
    }
  }
});

new Vue({
  el: '#wrapper',
})
