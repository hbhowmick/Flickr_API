$('#submit-btn').click(function(e) {
  // prevent default stops form from refreshing page
  e.preventDefault();
  let tag = $('#photo_search').val();
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c9f445031e5814376cf59620f8ab4827&tags=${tag}&format=json&nojsoncallback=1`;
  $.get(url, function(res) {

      for (let i = 0; i < 20; i++) {
        let farm = res.photos.photo[i].farm;
        let server = res.photos.photo[i].server;
        let id = res.photos.photo[i].id;
        let secret = res.photos.photo[i].secret;
        let text = res.photos.photo[i].title;

        let photo_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

        let card = `<div class="col-md-3"><div class="card card-block">`;

        card += `<a href="${photo_url}" target="_blank"><img class="card-img-top" src="${photo_url}" alt="${text}"></a><div class="card-body"><p class="card-text">${text}</p></div></div></div>`

        document.getElementById("card-container").innerHTML += card

      }
    })
});
