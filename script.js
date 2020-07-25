var col1 = document.querySelector("#col1");
var col2 = document.querySelector("#col2");
var text = document.querySelector("#text");
var body = document.querySelector("body");
var alertdone = document.querySelector(".alertdone");

col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);
function setGradient() {
  alertdone.classList.add("done");
  body.style.background = "linear-gradient(to right," + col1.value + "," + col2.value + ")";
  text.value = body.style.background;
}

// w3
function myFunction() {
  /* Get the text field */
  text.toggleAttribute("disabled");
  var copyText = text;
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  text.toggleAttribute("disabled");
  /* Alert the copied text */
  alertdone.classList.toggle("done");
}
