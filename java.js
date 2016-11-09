
//   function showResult(result) {
//     document.getElementById('latitude').value = result.geometry.location.lat();
//     document.getElementById('longitude').value = result.geometry.location.lng();
//   }
//
//   function getLatitudeLongitude(callback, address) {
//     address = address;
//     // Initialize the Geocoder
//     geocoder = new google.maps.Geocoder();
//     if (geocoder) {
//       geocoder.geocode({
//         'address': address
//       }, function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//           callback(results[0]);
//         }
//       });
//     }
//   }
//
//   document.getElementById("button101").addEventListener("click", function () {
//     console.log("button Clicked");
//     var address = document.getElementById('address').value;
//     getLatitudeLongitude(showResult, address)
  // });


  function jsonFlickrFeed(json) {
    $.each(json.items, function(i, item) {
      $("<img />").attr("src", item.media.m).appendTo("#images");
    });
  };

  $("button").click(function(){

    $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne',
      dataType: 'jsonp',
      data: { "tags": "", "format": "json" }
    });
  })


// function jsonFlickrFeed(json) {
//   console.log(json);
//
//   $.each(json.items, function(i, item) {
//     $("<img />").attr("src", item.media.m).appendTo("#images");
//   });
// };
//
// function handleButtonClick() {
//   $("button").remove();
//
//   $.ajax({
//     url: 'https://api.flickr.com/services/feeds/photos_public.gne',
//     dataType: 'jsonp',
//     data: { "tags": "kitten", "format": "json" }
//   });
// }


// flickr_key: 9bcc690e1a00968109fe8d9b8f69e65f
// access token 4133909671.9db7adb.96a61d1d52ff4a38bb7d8441a97ce50a
