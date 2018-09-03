var app = new Vue({
  el: '#container',
  data: {
    tales: [],
    place: 'Austin, TX',
    writing: false,
    write_area: ''
  },
  methods: {
    submitTale: function(e) {
      e.preventDefault();
      var req = this.$http.post(
          '/write_tale', { 
            write_area: this.write_area, 
            place_name: this.place, 
            address: autocomplete.getPlace().formatted_address, 
            lat: autocomplete.getPlace().geometry.location.lat(), 
            lon: autocomplete.getPlace().geometry.location.lng() 
          },
          { emulateJSON: true }
      ).then(response => {
        if (response.status === 200) {
          this.write_area = ''
          this.writing = false
        }
      })
    },
    getTales: function(lat, lon) {
      var req = this.$http.get('/get_tales?lat='+lat+'&lon='+lon).then(response => {
        if (response.status === 200) {
          this.tales = response.body
        }
      })
    }
  }
})