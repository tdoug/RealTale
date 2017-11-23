var app = new Vue({
  el: '#container',
  data: {
    tales: 'No tales at this location.  You should write one!',
    place: 'Austin, TX',
    writing: false
  },
   watch: {
     place: function(val, oldVal) {
     	
     }
   }
})