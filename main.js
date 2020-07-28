



function submitInfo() {
  var btn = $ ('#submit');
  btn.click(giveInformation); //attivazione del bottone e recupero del valore della searchbar con la funzione




}

function giveInformation(info){
  var info = $('#searchbar').val(); //valore della searchbar
  $(".details").text('');

  console.log(info);
  $.ajax ({
    url:'https://api.themoviedb.org/3/movie/550?api_key=8ac24a7a81a1a4b07020a1a1e2059da8',
    method:'GET',
    success: function(data) {
      var success = data ['success'];
      var value = data ['response'];

      console.log(data);


      // console.log(accaBi);


    },
    error: function(errori) {
      console.log('errore');
    }


})

function init() {
  console.log("helloworld");

  submitInfo();




}


$(document).ready(init);
