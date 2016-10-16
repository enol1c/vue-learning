const store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    storeMessage (state, message) {
      state.message = message
    }
  }
})


Vue.component('message', {
  template: '<input @keyup.enter="storeMessage"/>',
  methods: {
    storeMessage: function(e){
        store.commit('storeMessage', e.target.value);
        console.log('Storing ' + store.state.message);
        this.$parent.getMessage(e.target.value);
    }
  },

  computed: {
    message: {
      get () {
        return store.state.message
      },
      set (value) {
        store.commit('storeMessageMutation', value)
      }
    }
  }
});

new Vue({
  el: '#wrapper',
  store,
  methods: {
    getMessage: function(val) {
        console.log('Get ' + val);
    }
  }
})
