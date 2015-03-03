tool.maxDistance = 10;

var path;
var string;
var balloon;



function onMouseDown(event) {

  path = new Path();
  path.add(event.point);
}

function onMouseDrag(event) {

  var string = new Path.Circle({
    center: event.middlePoint,
    radius: event.delta.length / .5
    });
  string.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
  };
  path.add(event.point);
}


function onMouseUp(event) {

  var balloon = new Path.Circle({
    center: event.point,
    radius: Math.random() * ((150 - 80) + 100)
  });
  balloon.strokeColor = {
    hue: Math.random() * 36,
    saturation: 0,
    brightness: 1
  };
  balloon.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
  };
}




