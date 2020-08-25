var col1 = document.querySelector('#col1');
var col2 = document.querySelector('#col2');
var text = document.querySelector('#text');
var body = document.querySelector('body');
var alertdone = document.querySelector('.alertdone');

col1.addEventListener('input', setGradient);

col2.addEventListener('input', setGradient);

function setGradient() {
  alertdone.classList.add('done');
  body.style.background = 'linear-gradient(to right,' + col1.value + ',' + col2.value + ')';
  text.value = body.style.background + ';';
}

// w3
function myFunction() {
  /* Get the text field */
  text.toggleAttribute('disabled');
  var copyText = text;
  /* Select the text field */
  copyText.select();
  /*For mobile devices*/
  copyText.setSelectionRange(0, 99999);
  /* Copy the text inside the text field */
  document.execCommand('copy');
  text.toggleAttribute('disabled');
  alertdone.classList.toggle('done');
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

function setRandomColor() {
  col1.value = getRandomColor();
  col2.value = getRandomColor();
  setGradient();
}
