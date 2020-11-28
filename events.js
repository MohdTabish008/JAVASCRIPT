//event to display content on console after clicling h1

// $('h1').click(function() {
//   console.log("Heading clicked");
// })

//using this keyword it refers to object we are on performing that event on
// $('h1').click(function() {
//   $(this).text('I am changed through \'this\' keyword')
// })

//KeyPresses
// $('input').eq(0).keypress(function(){
//   $('h3').toggleClass('turnBlue')
// })
//
// $('input').eq(0).keypress(function(event) {
//   console.log(event);
// })
// $('input').eq(0).keypress(function(event) {
//   if (event.which === 13) {
//     $('h3').toggleClass('turnBlue');
//   }
// })


//on methods like event listeners in vanilla js
//
// $('h1').on('dblclick',function(){
//   $(this).toggleClass('turnRed')
// })
//
// $('h1').on('mouseenter',function(){
//   $(this).toggleClass('turnRed')
// })

//Animations

$('input').eq(1).on('click',function() {
  $('.container').slideToggle(3000)
})
