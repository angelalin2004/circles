function halfEnter(x) {
  console.log("here"); console.log($("#left").css("clip"));
  $(x).css("clip","rect(0px,200px,200px,0px)");
}
function halfLeave() {
  $("#left").css("clip","rect(0px,95px,200px,0px)");
  $("#right").css("clip","rect(0px,200px,200px,105px)");
}