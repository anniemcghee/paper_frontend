var path = new Path.Circle({
  position: Point.random() * view.size,
  radius: 70,
  fillColor: 'yellow'
});

count = 70;

var symbol = new Symbol(path);

for (var i = 0; i < count; i++) {
  // The center position is a random point in the view:
  var center = Point.random() * view.size;
  var placedSymbol = symbol.place(center);
  placedSymbol.scale(i / count);
}


function onFrame(event) {
  path.fillColor.hue += 3;

}
