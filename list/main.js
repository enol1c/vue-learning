Vue.component('item-component',{
  template: '#item-template',
  props:['items'],
});

new Vue({
  el: '#wrapper',
  created: function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function() {
        if (xhr.status === 200) {
            this.items = xhr.responseText
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
  },
  data: {
      items: []
  },
})
