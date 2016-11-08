$(function(){
  function showResult(result) {
    document.getElementById('latitude').value = result.geometry.location.lat();
    document.getElementById('longitude').value = result.geometry.location.lng();
  }



  function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address;
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          callback(results[0]);
        }
      });
    }
  }

  document.getElementById("button101").addEventListener("click", function () {
    console.log("button Clicked");
    var address = document.getElementById('address').value;
    getLatitudeLongitude(showResult, address)
  });
});

// client_id: 9db7adbec9ef444e959a2962041a3370
// access token 4133909671.9db7adb.96a61d1d52ff4a38bb7d8441a97ce50a
