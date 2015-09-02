var currentSide = "none"; // none, left, or right;

$(document).ready(function(){
  $("#container1").mouseenter(function(event){
    $("#title1").css("display","none");
    $("#title1").css("opacity","0.0");
  });
  /*
  $("#container1").mouseleave(function(event){
    console.log("left");
    setTimeout(function(){
      $("#title1").css("display","inline");
    },1500);
    setTimeout(function(){
      $("#title1").css("opacity","0.75");
    },3000); 
  });
  */ 
  $("#container1").mousemove(function(event){ 
    $("#title1").css("display","none");
    $("#title1").css("opacity","0.0");
    if (event.pageX < $("#container1").width()/2 + $("#container1").offset().left && currentSide != "right") {
      $("#leftc").css("z-index","10");
      $("#rightc").css("z-index","1");
      $("#left-text").css("z-index","30");
      $("#right-text").css("z-index","20");
    }
    else if (event.pageX > $("#container1").width()/2 + $("#container1").offset().left && currentSide != "left") {
      $("#leftc").css("z-index","1");
      $("#rightc").css("z-index","10");
      $("#left-text").css("z-index","20");
      $("#right-text").css("z-index","30");
    }
  });
});

function leftEnter() {
  currentSide = "left";
  $("#clip-left").css("clip","rect(0px,200px,200px,0px)");
  $("#left-text").css("opacity","1.0");
}
function rightEnter() {
  currentSide = "right";
  $("#clip-right").css("clip","rect(0px,200px,200px,0px)");
  $("#right-text").css("opacity","1.0");
}
function halfLeave() {
  $("#clip-left").css("clip","rect(0px,95px,200px,0px)");
  $("#left-text").css("opacity","0.0");
  $("#clip-right").css("clip","rect(0px,200px,200px,105px)");
  $("#right-text").css("opacity","0.0");
  currentSide = "none";
}