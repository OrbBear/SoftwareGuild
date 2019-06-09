//Checks that data was provided. Does not currently check for formatting
function validateItems() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;
  var reason = document.forms["contactForm"]["reason"].value;
  var info = document.forms["contactForm"]["info"].value;
  var beenTo = document.forms["contactForm"]["beenTo"].value;
  var contact = checkedOrNot();
  if (name != "" && email != "" && phone != "" && reason != "" && info != "" && beenTo != "" && contact != "" ) {
    alert("Information is Valid!");
    return false;
  }

  else{
    alert("Please complete the full form.");
    return false;
  }
}

//Workaround as document.forms["contactForm"]["contrat"] always returned blank.
//Checks to see if at least one checkbox is checked.
//If at least one is checked returns true if none returns false
function checkedOrNot(){
  var checkIds = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var result = false;
  for (var i = 0; i < checkIds.length; i++){
    if (document.getElementById(checkIds[i]).checked == true){
      result = true;
    }
  }
  return result

}
