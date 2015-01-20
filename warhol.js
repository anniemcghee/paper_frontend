var yellow = new Raster('yellow');

var peach = new Raster('peach');

var purple = new Raster('purple');

var green = new Raster('green');

var chickens = new Group([peach, yellow, purple, green]);

function onMouseDown (event) {

    for (var i = 0; i < 1; i++) {

          var position = event.point
            chicken = new Raster('yellow', position, .5);
            chicken2 = new Raster('purple', position + 40, .5);
            chickens.push(chicken, chicken2);
      }
}

function onMouseUp (event) {

  for (var i = 0; i < 1; i++) {
    var position = Point.random() * view.size,
    chicken = new Raster('peach', position, .5);
    chicken2 = new Raster('green', position + 35, .5);
    chickens.push(chicken, chicken2);
  }
}
