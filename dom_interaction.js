var header = document.querySelector("h1");
header.style.color = "gray"
//this will generate a random hex colour with he help of random library
function getRandomColor() {
  var letters = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i<6 ; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

//now  function to change the header color with above genrated hex code
function changeHeaderColor() {
  colorInput = getRandomColor();
  header.style.color = colorInput;
}

//setting intervals for change of colorInput in miliseconds
setInterval("changeHeaderColor()",300);
