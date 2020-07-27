



function submitInfo() {
  var btn = $ ('submit');
  btn.click(giveInformation);
  console.log('btn' ,btn);

  giveInformation();
}

function giveInformation(){
  var info = $ ('searchbar').value;
  console.log('btn', giveInformation);

}

function init() {
  console.log("helloworld");
  
  submitInfo();



}


$(document).ready(init);
