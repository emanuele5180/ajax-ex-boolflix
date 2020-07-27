



function submitInfo() {
  var btn = $ ('#submit');
  btn.click(giveInformation);



  console.log();
}

function giveInformation(info){
  var info = $('#searchbar').val();
  
  console.log(info);


}

function init() {
  console.log("helloworld");

  submitInfo();




}


$(document).ready(init);
