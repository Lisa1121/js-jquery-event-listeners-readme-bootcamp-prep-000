//define functions here

$(document).ready(function(){

// call functions here

});
function getIt() {
  $("p").on("click", function () {
    alert("Hey!")
  })
}
function frameIt () {
  $('img').on('load').addClass ('tasty')
}
function submitIt() {
  $("form").on("submit", function () {
    if ($( "input:first").val() === "correct") {
      alert('your form is going to be submitted now');
      return
    }
    alert("you entered the wrong value");
    return
  })
}
function pressIt () {
  
}
