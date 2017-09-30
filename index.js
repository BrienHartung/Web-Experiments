window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded () {
   canvasApp();
}

var CanvasApp = {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");
  
  context.fillStyle = "#aaaaff";     // light blue
  context.fillRect(0, 0, 400, 400);
}
