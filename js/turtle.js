$( document ).ready(function() {

  var taglines = ["Ojoo!","Blazing Turtles.","distinguished gentlemen","We make gaemz.", "Carp carp.", "YOLO", "SWAG", "Early acces open world zombie survival game. $$$"]
  var tagline = taglines[Math.floor(Math.random()*taglines.length)];

  $('#tagline').append(tagline);
  setTimeout(function () {
    $('#tagline').css('opacity', '0.8');
  }, 200);
});
