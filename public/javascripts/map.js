var autocomplete

function newPlace(manual_place) {
    let address
    if (autocomplete === undefined)
      return false

    if (manual_place != undefined) {
      address = manual_place
    }
    else {
      app.place = autocomplete.getPlace().name
      address = autocomplete.getPlace().formatted_address
    }
      
	var geocoder = new google.maps.Geocoder()
	 geocoder.geocode( { 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location)
            map.setZoom(17)
        } else {
            alert("Could not find location: " + location)
        }
    });
}
GoogleMapsLoader.KEY = "AIzaSyD09e53U71M5i9CS5dl6tEGOniCcRXXT_g"
GoogleMapsLoader.LIBRARIES = ['places']
GoogleMapsLoader.load(function(google) {
	map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
    })
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('place'), {
    });
    autocomplete.addListener('place_changed', newPlace)
    newPlace('Austin, TX')
});