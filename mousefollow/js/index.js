$(document).ready(function(){
  
  function startClock() {
    console.log("clock started");
    setInterval('updateClock()', 1000 );
  }
  function updateClock ( )
{
  console.log("again");
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("time").innerHTML = currentTimeString;
}
  
  var div_id = 1;
  $(document).mousemove(function(event){ 
    $("#xy").text("X: " + event.pageX + ", Y: " + event.pageY );
    $("div").css({
      "left" : event.pageX - 25,
      "top" : event.pageY - 25
    });
  });
  $("div").click(function(event){
    var last_div_str = "#div" + div_id;
    var new_dimensions = $("#div1").height() + 50;
    console.log($("#div1").height());
    console.log($("#div1").height()+50);
    $(last_div_str).after('<div class="active" id="div' + ++div_id + '"></div>');
    var new_div_str = "#div" + div_id;
    $(new_div_str).css({
        "height" : $(last_div_str).height()*1.2,
        "width" : $(last_div_str).height()*1.2,
    });
  });
});