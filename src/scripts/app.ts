function showHideDiv(ele) {
  var srcElement = document.getElementById(ele);
  if (srcElement != null) {
    if (srcElement.style.display == "block") {
      srcElement.style.display = 'none';
    }
    else {
      srcElement.style.display = 'block';
    }
    return false;
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.text1.focus();
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    document.text1.focus();
    return false;
  }
}