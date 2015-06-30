$(document).ready(function(){
  $(document).mousemove(function(event){ 
    $("span").text("X: " + event.pageX + ", Y: " + event.pageY );
    $("div").css({
      "left" : event.pageX - 50,
      "top" : event.pageY - 50
    });
  });
});