function addSearchListener() {
  var target = $('#search');
  target.click(startSearch);
}

function startSearch() {

  var target = $('#query');
  var query = target.val();
  target.val('');

  var targetResult = $ ('#results ul');
  target.text('');

  getMovies(query);
  getSeries(query);


}

function getMovies(query) {
  //spostate nella startSearch in quanto devono valere per i film e le serie
  // var target = $('#query');
  // var query = target.val();
  // target.val(''); //cancella la ricerca nella barra



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

      //spostato nella startSearch con cambio di nome da target a targetResult
      var target = $ ('#results ul');
      // target.text('');  //cancella i risultati precedenti
      var template = $ ('#movie-template').html();
      var compiled = Handlebars.compile(template);

      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        //movie.test='hello world'  //prima possibilità per valorizzare l'oggetto {{test}} in html
        //movie.test = '<i class="fas fa-star"></i>';
        var vote = movie['vote_average'];
        movie.stars = getStars (vote);

        var lang = movie['original_language'];
        movie.flag = getFlag(lang);

        // var poster = movie ['poster_path'];
        // movie.poster = getPosterHTML(poster);


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


  });

}

function getSeries(query){

  $.ajax({
    url:'https://api.themoviedb.org/3/search/tv',
    method:'GET',
    data: {
      'api_key':'8ac24a7a81a1a4b07020a1a1e2059da8',
      'query': query
    },
    success: function(data) {
      console.log(data);
      var series = data['results'];


      var target = $ ('#results ul');

      var template = $ ('#serie-template').html();
      var compiled = Handlebars.compile(template);

      for (var i = 0; i < series.length; i++) {
        var serie = series[i];

        var vote = serie['vote_average'];
        serie.stars = getStars (vote);

        var lang = serie['original_language'];
        serie.flag = getFlag(lang);


        var serieHTML = compiled(serie);
        target.append(serieHTML);

      }
    },
    error: function(err) {
      console.log(err);
    }


  });

}

function getStars(vote){
  vote = Math.ceil(vote/2);
  console.log('vote', vote);


  var voteHTML = '';
  for (var j = 0; j < 5; j++) {

    if (j< vote) {
      voteHTML += '<i class="fas fa-star"></i>';
    } else {
      voteHTML += '<i class="far fa-star"></i>';
    }



  }
  //movie.stars = voteHTML;
  return voteHTML;


}
function getFlag(lang){

  // if (lang === 'it' || lang ==='en') {
  //   movie.flag = `<img class="flag" src ="img/${lang}.jpg">`;
  //
  //
  // }else {
  //   movie.flag =lang;
  //
  // }

  if (lang === 'it' || lang ==='en') {
    return `<img class="flag" src ="img/${lang}.jpg">`;


  }
    return lang;

  // questa è la stessa cosa ma più leggera, l'else non serve

}



function init() {
  console.log("helloworld");

  addSearchListener();
  //getMovies(); debug
  startSearch();


  //convertNumbers();

  // submitInfo();




}


$(document).ready(init);


// function convertNumbers(min, max) {
//   var min = 1;
//   var max = 5;
//   var originalNumber = 4.59;
//   var integer = Math.ceil (originalNumber);
//
//   console.log('numero: ',integer);
// }



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
