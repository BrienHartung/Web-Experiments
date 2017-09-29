var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

context.strokeStyle = "#000000"

context.arc(100, 200, 20, (Math.PI/180)*0, (Math.PI/180)*90, true);
