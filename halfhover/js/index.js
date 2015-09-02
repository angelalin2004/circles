var currentSide = "none"; // none, left, or right;

$(document).ready(function(){
  $("#container1").mousemove(function(event){      
    if (event.pageX < $("#container1").width()/2 + $("#container1").offset().left && currentSide != "right") {
      $("#leftc").css("z-index","10");
      $("#rightc").css("z-index","1");
    }
    else if (event.pageX > $("#container1").width()/2 + $("#container1").offset().left && currentSide != "left") {
      $("#leftc").css("z-index","1");
      $("#rightc").css("z-index","10");
    }
  });
});

function leftEnter() {
  currentSide = "left";
  $("#clip-left").css("clip","rect(0px,200px,200px,0px)");
  $("#textc").css("width","200px");
  $("#textc").css("overflow","visible");
}
function rightEnter() {
  currentSide = "right";
  $("#clip-right").css("clip","rect(0px,200px,200px,0px)");
}
function halfLeave() {
  $("#clip-left").css("clip","rect(0px,95px,200px,0px)");
  $("#textc").css("width","0px");
  $("#textc").css("overflow","hidden");
  $("#clip-right").css("clip","rect(0px,200px,200px,105px)");
  currentSide = "none";
}