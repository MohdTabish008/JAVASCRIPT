var shoes = 10;
var socks = 15;

var quantity = "blank"

if ( shoes < socks ) {
  quantity = "We need more socks"
}else if ( socks < shoes ) {
  quantity = "We need more shoes"
}else {
  quantity = "Shoes = Socks"
}

console.log(quantity);
