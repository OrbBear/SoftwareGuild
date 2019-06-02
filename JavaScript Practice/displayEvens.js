function clearErrors() {
  for (var loopCounter = 0;
    loopCounter < document.forms["numberFun"].elements.length;
    loopCounter++) {
      if (document.forms["numberFun"].elements[loopCounter]
    .parentElement.className.indexOf("has-") != -1) {

      document.forms["numberFun"].elements[loopCounter]
      .parentElement.className = "form-group";
    }
    }
}
function resetForm() {
  clearErrors();
  document.forms["numberFun"]["startingNumber"].value = "";
  document.forms["numberFun"]["endingNumber"].value = "";
  document.forms["numberFun"]["step"].value = "";
  document.getElementById("results").style.display = "none";
  document.forms["numberFun"]["startingNumber"].focus();
}

function validateItems() {
  clearErrors();
  var startingNumber = document.forms["numberFun"]["startingNumber"].value;
  var endingNumber = document.forms["numberFun"]["endingNumber"].value;
  var step = document.forms["numberFun"]["step"].value;
  if (startingNumber == "" || isNaN(startingNumber)) {
    alert("Starting Number must be filled in with a number.");
    document.forms["numberFun"]["startingNumber"]
      .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["startingNumber"].focus();
    return false;
  }
  if (endingNumber == "" || isNaN(endingNumber)) {
    alert("Ending Number must be filled in with a number.");
    document.forms["numberFun"]["endingNumber"]
      .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["endingNumber"].focus();
    return false;
  }
  if (step == "" || isNaN(step)) {
    alert("Step must be filled in with a number.");
    document.forms["numberFun"]["step"]
      .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["step"].focus();
    return false;
  }
  calculateItems();
  document.getElementById("results").style.display = "block";


  //Return false so form doesn't submit and we see results
  return false;
}

function calculateItems(){
  var startingNumber = Number(document.forms["numberFun"]["startingNumber"].value);
  var endingNumber = Number(document.forms["numberFun"]["endingNumber"].value);
  var step = Number(document.forms["numberFun"]["step"].value);
  var result = [];
  var text;
  text = "<ul>"
  for (var i=startingNumber; i < endingNumber; i = (i + step)){
    if(i % 2 == 0){
      result.push(i);
    }
  }
  for (i=0; i < result.length; i++) {
    text += "<li>" + result[i] + "</li>";
  }
  text += "</ul>";

  document.getElementById("evenResult").innerHTML = text;
  document.getElementById("startingNumber1").innerText = startingNumber;
  document.getElementById("endingNumber1").innerText = endingNumber;
  document.getElementById("step1").innerText = step;
  return false;
  }
