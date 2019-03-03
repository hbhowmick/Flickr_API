// function getInfo(photo_url) {
//   console.log(photo_url);
//   let photo = document.getElementById('photo');
//
//
//   photo.src=str(photo_url);
//
//   $('#photo').html(photo);
// }


$('#submit-btn').click(function(e) {
  // prevent default stops form from refreshing page
  e.preventDefault();
  let tag = $('#photo_search').val()
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c9f445031e5814376cf59620f8ab4827&tags=${tag}&format=json&nojsoncallback=1`
  $.get(url, function(res) {
      let farm = res.photos.photo[0].farm;
      let server = res.photos.photo[0].server;
      let id = res.photos.photo[0].id;
      let secret = res.photos.photo[0].secret;

      let photo_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      console.log(photo_url);

      let photo = document.getElementById('photo');

      photo.src = photo_url;

      $('#photo').html(photo);
    })
  // getInfo();
  // console.log(url);

});
