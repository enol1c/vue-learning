Vue.component('item-comp',{
  template: '#item-temp',
  props:['items'],
  data: function() {
    return {
      filter: ''
    }
  },
  methods:{
    setCompleted: function(item){
        item.completed =  ! item.completed;
        this.$http.post('https://jsonplaceholder.typicode.com/posts', this.items).then((response) => {
      }, (response) => {
          alert(response.data);
      });
    }
  },
  computed: {
        filteredItems: function() {
            var self = this;
            return this.items.splice(0, 10)
        }
    },
});

new Vue({
  el: '#wrapper',
  data:{
    items:[]
  },

    created: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.data.forEach(function(object){
          object.completed = false;
      });
        this.items = response.data;
      }, (response) => {
        alert(response);
      });
    },
})
