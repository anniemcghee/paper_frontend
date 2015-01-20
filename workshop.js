// var count = 150;

// var path = new Path.Circle({
//   center: [0, 0],
//   radius: 10,
//   fillColor: 'pink',
//   strokeColor: 'black'
// });

var text = new Path.Circle({
      center: view.center,
      radius: 70,
      fillColor: 'pink'
  });

// var symbol = new Symbol(path);

// for (var i = 0; i < count; i++) {

//   var center = Point.random() * view.size;
//   var placedSymbol = symbol.place(center);
//   placedSymbol.scale(i / count);
// }

var mousePos = view.center + [view.bounds.width / 2, 100];
var position = view.center;



function onFrame(event) {


  for (var i = 0; i < count; i++) {
    var item = project.activeLayer.children[i];
    item.fillColor.hue += 9;
    item.position += (mousePos - position) / 10;
  }
}

function onMouseMove(event) {
     mousePos = event.point;
}

// Create a centered text item at the center of the view:


// // Define a random point in the view, which we will be moving
// // the text item towards.
// var destination = Point.random() * view.size;

// function onFrame(event) {
// //   // Each frame, move the path 1/30th of the difference in position
// //   // between it and the destination.

// //   // The vector is the difference between the position of
// //   // the text item and the destination point:
//   var vector = destination - text.position;

// //   // We add 1/30th of the vector to the position property
// //   // of the text item, to move it in the direction of the
// //   // destination point:
//   text.position += vector / 3;

// //   // Set the content of the text item to be the length of the vector.
// //   // I.e. the distance it has to travel still:

// //   // If the distance between the path and the destination is less
// //   // than 5, we define a new random point in the view to move the
// //   // path to:
//   if (vector.length < 5) {
//     destination = Point.random() * view.size;
//   }

//   text.fillColor.hue += 2;
// }
