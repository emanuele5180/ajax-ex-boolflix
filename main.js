function addSearchListener() {
  var target = $('#search');
  target.click(getMovies);
}

function getMovies() {
  var target = $('#query');
  var query = target.val();
  target.val(''); //cancella la ricerca nella barra



  $.ajax({
    url:'https://api.themoviedb.org/3/search/movie',
    method:'GET',
    data: {
      'api_key':'8ac24a7a81a1a4b07020a1a1e2059da8',
      'query': query
    },
    success: function(data) {
      console.log(data);
      var movies = data['results'];

      var target = $ ('#results ul');
      target.text('');  //cancella i risultati precedenti
      var template = $ ('#movie-template').html();
      var compiled= Handlebars.compile(template);

      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var movieHTML = compiled(movie);
        target.append(movieHTML);

        // var movieHTML = compiled({
        //   'titolo': movie ['title']
        //
        // });
        // target.append(movieHTML);

      }
    },
    error: function(err) {
      console.log(err);
    }


  })

}

function init() {
  console.log("helloworld");

  addSearchListener();

  // submitInfo();




}


$(document).ready(init);



// function submitInfo() {
//   var btn = $ ('#submit');
//   btn.click(giveInformation); //attivazione del bottone e recupero del valore della searchbar con la funzione
//
//
//
//
// }
//
// function giveInformation(info){
//   var info = $('#searchbar').val(); //valore della searchbar
//   $(".details").text('');
//
//   console.log(info);
//   $.ajax ({
//     url:'https://api.themoviedb.org/3/movie/550?api_key=8ac24a7a81a1a4b07020a1a1e2059da8',
//     method:'GET',
//     success: function(data) {
//       var success = data ['success'];
//       var value = data ['response'];
//
//       console.log(data);
//
//
//       // console.log(accaBi);
//
//
//     },
//     error: function(errori) {
//       console.log('errore');
//     }
//
//
// })
