var currentSide = "none"; // none, left, or right;

$(document).ready(function(){
  $("#test").mousemove(function(event){      
    if (event.pageX < $("#test").width()/2 + $("#test").offset().left && currentSide != "right") {
      $("#leftc").css("z-index","10");
      $("#rightc").css("z-index","1");
    }
    else if (event.pageX > $("#test").width()/2 + $("#test").offset().left && currentSide != "left") {
      $("#leftc").css("z-index","1");
      $("#rightc").css("z-index","10");
    }
  });
});

function leftEnter() {
  currentSide = "left";
  $("#clip-left").css("clip","rect(0px,200px,200px,0px)");
}

function rightEnter() {
  currentSide = "right";
  $("#clip-right").css("clip","rect(0px,200px,200px,0px)");
}

function leftLeave() {
  $("#clip-left").css("clip","rect(0px,200px,200px,105px)");
}

function rightLeave() {
  $("#clip-right").css("clip","rect(0px,200px,200px,105px)");
}

function halfEnter(x) {
  console.log("here"); console.log($("#left").css("clip"));
  $(x).css("clip","rect(0px,200px,200px,0px)");
}
function halfLeave() {
  currentSide = "none";
  $("#clip-left").css("clip","rect(0px,95px,200px,0px)");
  $("#clip-right").css("clip","rect(0px,200px,200px,105px)");
  $("#leftc").css("z-index","1");
  $("#rightc").css("z-index","10");
}