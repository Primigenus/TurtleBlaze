$( document ).ready(function() {

  var taglines = ["Ojoo!","Blazing Turtles.","distinguished gentlemen","We make gaemz.", "Carp carp.", "YOLO", "SWAG", "Early acces open world zombie survival game. $$$"]
  var tagline = taglines[Math.floor(Math.random()*taglines.length)];
  var section = "home";

  $('.big-logo').jrumble();


  $('#tagline').append(tagline);
  setTimeout(function () {
    $('#tagline').css('opacity', '0.8');
  }, 200);

  $( ".blogbutton" ).click(function() {
    $( "#home" ).css('opacity', '0');
    $( "#about" ).css('opacity', '0');
    $( "#aboutcontent" ).css('transform', 'translateY(20%)');
    $( "#home" ).css('transform', 'translateY(20%)');
    $( "#topbar" ).css('transform', 'translateY(-200px)');
    $( "#topbardivider" ).css('transform', 'translateY(-230px)');

      setTimeout(function(){
        window.location = "http://turtleblazedev.tumblr.com/";
      }, 800);
  });



  $( ".aboutbutton" ).click(function() {
        if (section != "about"){
              $( "#about" ).css('transform', 'translateX(0)');
              section = "about";
              $('.big-logo').trigger('startRumble');
              $( "#home" ).css('opacity', '0');


                setTimeout(function(){
                    $('.big-logo').trigger('stopRumble');

                }, 400);
        }
  });

  $( ".homebutton" ).click(function() {
        if (section == "about"){
              $( "#about" ).css('transform', 'translateX(100%)');
              $( "#home" ).css('opacity', '1');
              section = "home";


                setTimeout(function(){
                }, 800);
        }
  });





    // Initialize jRumble on Selector
  $('#rumble-element').jrumble();

  // Start rumble on element
  $('#rumble-element').trigger('startRumble');

  // Stop rumble on element
  $('#rumble-element').trigger('stopRumble');


});
