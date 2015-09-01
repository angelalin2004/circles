$(document).ready(function(){
  $("#test").mousemove(function(event){      
    if (event.pageX < $("#test").width()/2+$("#test").offset().left) {
      $("#leftc").css("z-index","100");
    }
  });
});

function leftEnter() {
  console.log("left entered");
  $("#clip-left").css("clip","rect(0px,200px,200px,0px)");
}

function rightEnter() {
  console.log("right entered");
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
  $("#clip-left").css("clip","rect(0px,95px,200px,0px)");
  $("#clip-right").css("clip","rect(0px,200px,200px,105px)");
}